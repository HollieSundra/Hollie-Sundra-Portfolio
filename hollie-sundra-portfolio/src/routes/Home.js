import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Creations from "../components/Creations";
import Footer from "../components/Footer";

const Home = () => {
    return (
    <div>
        <Navbar/>
        <Heroimg />
        <Creations />
        <Footer />
    </div>
    );
};

export default Home;