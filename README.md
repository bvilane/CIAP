# Community Internet Access Platform (CIAP)

CIAP is a web-based application designed to facilitate internet access, provide educational content, and offer a platform for job opportunities. It serves as a gateway for users to learn how to use the internet effectively and engage with digital resources.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application Locally](#running-the-application-locally)
- [Deploying to Heroku](#deploying-to-heroku)
- [License](#license)

## Features

- User authentication and management
- Admin dashboard for network monitoring and user management
- User dashboard with data usage tracking
- Educational articles and videos
- Real-time network status updates

## Requirements

- [Node.js](https://nodejs.org/)
- [Python 3.x](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Installation

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ciap.git
   cd ciap/ciap-backend

2. **Create a virtual environment:**

    ```bash
    python -m venv venv

3. **Activate the virtual environment:**
    
    On Windows:
    ```bash
    source venv/bin/activate

    On macOS and Linux:
    ```bash
    source venv/bin/activate

4. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt

5. **Set up the database:**

    ```bash
    CREATE DATABASE ciap_db;

6. **Set up environment variables:**

    ```bash
    SQLALCHEMY_DATABASE_URI=postgresql://ciap_user:yourpassword@localhost/ciap_db
    JWT_SECRET_KEY=your_secret_key

### Frontend Setup
1. Navigate to the frontend directory:

    ```bash
    cd ../ciap-frontend

2. Install the dependencies:

    ```bash
    npm install

3. Build the React app:

    ```bash
    npm run build

### Running the Application Locally

1. Start the Flask backend:

    Navigate to the ciap-backend directory and run:

    ```bash
    flask run

2. Serve the React frontend:

    The build folder created by the frontend setup will be served automatically by the Flask backend. Access the application by navigating to http://localhost:5000 in your browser.

### Deploying to Heroku

Prepare for Deployment

1. Install the Heroku CLI:

    Follow the instructions here to install the Heroku CLI.

2. Login to Heroku:

    ```bash
    heroku login

3. Create a Heroku app:

    ```bash
    heroku create ciap

4. Add the Heroku remote:

    ```bash
    heroku git:remote -a ciap

### Set Environment Variables

1. Set environment variables on Heroku:

    ```bash
    heroku config:set SQLALCHEMY_DATABASE_URI='your_database_uri_here'
    heroku config:set JWT_SECRET_KEY='your_secret_key_here'

### Deploy the Application
1. Commit changes to Git:

    Make sure all changes are committed:

    ```bash
    git add .
    git commit -m "Prepare for Heroku deployment"
    Push to Heroku:

2. Push the code to Heroku:

    ```bash
    git push heroku main

3. Open your app:

    ```bash
    heroku open

4. Check logs for errors:

    If there are any issues, check the logs:

    ```bash
    heroku logs --tail

### License
This project is licensed under the MIT License.