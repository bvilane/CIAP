import React from 'react';

function Jobs() {
    const jobs = [
        { title: "Remote Customer Service Representative", link: "https://jobs.example.com/remote-csr", company: "TechCo", location: "Remote", summary: "Join our remote team to provide excellent customer service." },
        { title: "Data Entry Clerk", link: "https://jobs.example.com/data-entry", company: "DataEnter Inc.", location: "Remote", summary: "Data entry clerks needed for remote work with flexible hours." },
        { title: "Freelance Writer", link: "https://jobs.example.com/freelance-writer", company: "WriteAway", location: "Remote", summary: "Seeking freelance writers to produce content across various topics." },
        { title: "Virtual Assistant", link: "https://jobs.example.com/virtual-assistant", company: "VirtuallyAssist", location: "Remote", summary: "Provide administrative support from the comfort of your home." }
    ];    

    return (
        <div className="section">
            <h2>Job Listings</h2>
            {jobs.map((job, index) => (
                <div key={index}>
                    <a href={job.link} target="_blank" rel="noopener noreferrer">{job.title}</a>
                </div>
            ))}
        </div>
    );
}

export default Jobs;
