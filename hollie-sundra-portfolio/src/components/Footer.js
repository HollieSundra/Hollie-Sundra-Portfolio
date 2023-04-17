import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <div>
                            <p>2457 E. Meadow Creek Way</p>
                            <p>Queen Creek, Az 85140</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    256-684-0137
                        </h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    holliesundra@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Social Media Links</h4>
                    <div className="social-media">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;