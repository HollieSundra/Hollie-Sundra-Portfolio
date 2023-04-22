import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Creations from "../components/Creations";

const Project = () => {
    return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS" text="Some of my most recents works"/>
        <Creations />
        <Footer />
    </div>
    );
};

export default Project;