import "./AboutContentStyles.css";

import React from "react";

import { Link } from "react-router-dom";


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Hello!</h1>
                <p>
                    I am a Full Stack developer. I love creating responsive and unique applications. I'm alway eager to tackle a challenge and truely enjoy working with a dynamic team.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutContent;