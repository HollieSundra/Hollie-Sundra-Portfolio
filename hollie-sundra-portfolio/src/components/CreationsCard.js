import "./CreationsCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const CreationsCard = (props) => {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="image" />
        <h2 className="protect-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
            <div className="project-btn">
                <NavLink to={props.view} className="btn">View</NavLink>
            </div>
        </div>
    </div>
    );
};

export default CreationsCard;