from flask import Flask, send_from_directory, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os
import re  

app = Flask(__name__, static_folder='../ciap-frontend/build', static_url_path='')
CORS(app)  # Enables CORS for all domains and routes

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI', 'postgresql://default_uri')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your_default_jwt_secret_key')

db = SQLAlchemy(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    surname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(100), nullable=False, default='South Africa')
    town = db.Column(db.String(100), nullable=False, default='Soweto')
    zone = db.Column(db.Integer, nullable=False)
    data_used = db.Column(db.Float, default=0.0)
    is_admin = db.Column(db.Boolean, default=False)

# Initialize database
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def home():
    return 'Welcome to the Community Internet Access Platform!'

@app.route('/register', methods=['POST'])
def register():
    name = request.json.get('name')
    surname = request.json.get('surname')
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    zone = request.json.get('zone')
    
    if User.query.filter_by(email=email).first() or User.query.filter_by(username=username).first():
        return jsonify({"error": "Email or Username already taken"}), 409

    if not re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$', password):
        return jsonify({"error": "Invalid password format"}), 400
    
    hashed_password = generate_password_hash(password)
    new_user = User(name=name, surname=surname, email=email, username=username, password=hashed_password, zone=zone)
    db.session.add(new_user)
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Database error"}), 500
    return jsonify({"message": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity={"id": user.id, "is_admin": user.is_admin})
        return jsonify({"access_token": access_token, "is_admin": user.is_admin}), 200
    return jsonify({"error": "Bad username or password"}), 401

@app.route('/data_usage', methods=['POST'])
@jwt_required()
def update_data_usage():
    claims = get_jwt_identity()
    user_id = claims['id']
    is_admin = claims['is_admin']
    
    if not is_admin:
        return jsonify({"error": "Unauthorized - Admins only"}), 403

    data_used = request.json.get('data_used', 0.0)
    user = User.query.get(user_id)
    if user:
        user.data_used += data_used
        db.session.commit()
        return jsonify({"message": "Data usage updated"}), 200
    return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
