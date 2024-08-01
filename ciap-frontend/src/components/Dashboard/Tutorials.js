import React from 'react';

function Tutorials() {
    const tutorials = [
        { title: "How to Use Google Drive", link: "https://www.youtube.com/watch?v=HdFqT2OkRQI", thumbnail: "https://img.youtube.com/vi/HdFqT2OkRQI/hqdefault.jpg" },
        { title: "Beginners Guide to SEO", link: "https://www.youtube.com/watch?v=xsVTqzratPs", thumbnail: "https://img.youtube.com/vi/xsVTqzratPs/hqdefault.jpg" },
        { title: "Email Marketing Tips", link: "https://www.youtube.com/watch?v=b5ZZwGTkPTA", thumbnail: "https://img.youtube.com/vi/b5ZZwGTkPTA/hqdefault.jpg" },
        { title: "Excel Basics for Beginners", link: "https://www.youtube.com/watch?v=Vl0H-qTclOg", thumbnail: "https://img.youtube.com/vi/Vl0H-qTclOg/hqdefault.jpg" }
    ];    

    return (
        <div className="section">
            <h2>Tutorials</h2>
            {tutorials.map((tutorial, index) => (
                <div key={index}>
                    <a href={tutorial.link} target="_blank" rel="noopener noreferrer">{tutorial.title}</a>
                </div>
            ))}
        </div>
    );
}

export default Tutorials;
