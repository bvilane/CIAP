// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm'; // Ensure this import is correct based on your folder structure

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to the CIAP Home Page</h1>
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={RegisterForm} /> {/* Ensure this route points to the RegisterForm */}
          <Route path="/login" component={LoginForm} /> {/* Updated to use LoginForm */}
          {/* Add other routes and components as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
