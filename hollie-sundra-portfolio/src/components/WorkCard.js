import "./WorkCardStyles.css";

import React from "react";
import project1 from "../assets/challenge10.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
    return (
        <div className="project-card">
        <img src={project1} alt="image" />
        <h2 className="protect-title">Team Profile Generator</h2>
        <div className="project-details">
            <p>Description here</p>
            <div className="project-btn">
                <NavLink to="url.com" className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
    </div>
    );
};

export default WorkCard;