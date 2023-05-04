
import React, { useState } from "react";
import "./ContactMeStyles.css";



const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }; 

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                ></input>
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}></input>
                <label htmlFor="subject">Subject</label>
                <input 
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}></input>
                <label htmlFor="message">Message</label>
                <textarea 
                 id="message"
                 name="message"
                 rows="6" 
                 placeholder="Message here"
                 value={formData.message}
                 onChange={handleChange} />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactMe;