import "./AboutMeStyles.css";

import React from "react";
import HeadShot from "../assets/headshot.jpg";

import { Link } from "react-router-dom";


const AboutMe = () => {
    return (
        <div className="about">
            <div className="left">
                <div className="headshot">
                    <img className="headshot-img"
                    src={HeadShot} alt="HeadShot"/> 
                </div>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutMe;