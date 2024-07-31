import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from '../../images/AfriFi Logo.svg'; 

function HomePage() {
  const articles = [
    { title: 'How to Use the Internet Safely', link: '#', summary: 'Learn the best practices for staying safe online.' },
    { title: 'Top Online Resources for Learning', link: '#', summary: 'Discover free resources for online education.' },
    { title: 'Finding Remote Jobs', link: '#', summary: 'A guide to finding and applying for remote work opportunities.' },
    { title: 'Understanding Internet Data Usage', link: '#', summary: 'Learn how to manage and monitor your internet data usage.' },
    { title: 'Introduction to Digital Marketing', link: '#', summary: 'An overview of digital marketing and how it works.' },
    { title: 'Basics of Cybersecurity', link: '#', summary: 'Understand the basics of cybersecurity and how to protect your information.' },
    { title: 'Using Social Media Effectively', link: '#', summary: 'Tips and tricks for using social media platforms effectively.' },
    { title: 'Online Education Platforms', link: '#', summary: 'Explore various platforms that offer online courses and certifications.' }
  ];

  return (
    <div className="homepage">
      <header className="homepage-header">
        <img src={logo} alt="AfriFi Logo" className="logo" />
        <h1>Welcome to your CIAP</h1>
        <p>Access your dashboard by logging in or registering.</p>
      </header>
      <div className="navigation">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
      </div>
      <div className="articles-section">
        <h2>Latest Articles</h2>
        <div className="articles">
          {articles.map((article, index) => (
            <div key={index} className="article">
              <h3><a href={article.link}>{article.title}</a></h3>
              <p>{article.summary}</p>
            </div>
          ))}
        </div>
        <Link to="/articles" className="nav-button view-more-button">View More</Link>
      </div>
    </div>
  );
}

export default HomePage;
