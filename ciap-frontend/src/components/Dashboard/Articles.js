import React from 'react';

function Articles() {
    const articles = [
        { title: "Securing Your Online Presence", link: "https://www.cisa.gov/uscert/ncas/tips/ST04-014", summary: "Learn how to secure your online activities with these expert tips." },
        { title: "The Best Platforms for Online Learning", link: "https://www.edx.org/", summary: "Discover platforms to boost your skills with free and paid courses." },
        { title: "Finding Remote Jobs", link: "https://www.indeed.com/q-Remote-jobs.html", summary: "A guide to finding and applying for remote work opportunities." },
        { title: "Basics of Digital Marketing", link: "https://digitalmarketinginstitute.com/blog/what-is-digital-marketing", summary: "An overview of digital marketing and how it works." }
    ];    

    return (
        <div className="section">
            <h2>Featured Articles</h2>
            {articles.map((article, index) => (
                <div key={index}>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                </div>
            ))}
        </div>
    );
}

export default Articles;
