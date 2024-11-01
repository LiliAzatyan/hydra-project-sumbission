import VirtualReality from "../../assets/images/virtual-reality.png";
import React, { useEffect, useState } from 'react';
import './ComingSoon.css'; 

const ComingSoon = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const fullText = "This page will be ready soon!";
        let index = 0;

        const typingEffect = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100); // Adjust typing speed here (in ms)

        return () => clearInterval(typingEffect);
    }, []);

    return (
        <div className="container">
            <div className="image-container">
                <img src={VirtualReality} alt="VirtualReality" />
            </div>
            <div className="text-container">
                <h1 className="animated-text">{text}</h1>
                <p>We are working hard to bring you a new experience. Stay tuned!</p>
            </div>
        </div>
    );
};

export default ComingSoon;
