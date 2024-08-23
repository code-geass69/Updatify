// src/components/Marquee.js
import React from 'react';
import '../styles/Marquee.css'; // Ensure you have a CSS file for styling

const Marquee = ({ content }) => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {content}
            </div>
        </div>
    );
};

export default Marquee;
