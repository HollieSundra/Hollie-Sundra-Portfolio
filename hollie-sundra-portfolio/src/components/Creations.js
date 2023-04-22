import "./CreationsCardStyles.css";
import CreationsCard from "./CreationsCard";
import CreationsCardInfo from "./CreationsCardInfo";

import React from "react";

const Creations = () => {
    return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {CreationsCardInfo.map((val, ind) => {
                return (
                    <CreationsCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />    
                );
            })}
        </div>
    </div>
    );
};

export default Creations;