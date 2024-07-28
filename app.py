from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)  # Enables CORS for all domains and routes

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ciap_user:B%40fbhs2030%21@localhost/ciap_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = '551d706b2e8e651d0450030b459eaf16684c5262be00a4cf3d9c888636a1f34bd38b46a9a71e57420d49d4f2a2bde5871108bfda9b3ed4fba70e8a01b3b05dc2a4c26ef287d411373270c579e8eb19d93c467b68ee25c006d4a5be30a3498ed46def6bf8664731290f5cfa3679b443ff85ac4248f1c3b9059235ec872de679508d8251df89bf8b9a995c82a2dbd2a44693f26ddc1a52e9daa5746dd6ef0773cca4556ef5f8889dd536c9bc7cbfc7f5a4350eba93850c6bd622baea78822a0c9eb568a4084dd801d97145c95054610045e01ea1eb36b7cdf25dab58de562a51583dbab94c34705c0224228a6b7762c3e7969a9d96fa222f03899367b8c1f9a1d1'

db = SQLAlchemy(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)  # Ensure length is appropriate for hashed passwords
    data_used = db.Column(db.Float, default=0.0)
    is_admin = db.Column(db.Boolean, default=False)  # New field to indicate if the user is an admin

# Initialize database
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def home():
    return 'Welcome to the Community Internet Access Platform!'

@app.route('/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')
    is_admin = request.json.get('is_admin', False)  # Optionally allow setting admin status
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already taken"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password=hashed_password, is_admin=is_admin)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered"}), 201

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity={"id": user.id, "is_admin": user.is_admin})
        return jsonify(access_token=access_token, is_admin=user.is_admin)
    return jsonify({"message": "Bad username or password"}), 401

@app.route('/data_usage', methods=['POST'])
@jwt_required()
def update_data_usage():
    claims = get_jwt_identity()
    user_id = claims['id']
    is_admin = claims['is_admin']
    
    if not is_admin:
        return jsonify({"message": "Unauthorized - Admins only"}), 403

    data_used = request.json.get('data_used', 0.0)
    user = User.query.get(user_id)
    if user:
        user.data_used += data_used
        db.session.commit()
        return jsonify({"message": "Data usage updated"}), 200
    return jsonify({"message": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
