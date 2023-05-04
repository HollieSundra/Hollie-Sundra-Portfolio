import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutMe from "../components/AboutMe";

const About = () => {
    return (
    <div>
        <Navbar />
        <HeroImg2
  heading="ABOUT"
  text={
    <div>
      <p>
        As a full-stack developer, I am passionate about creating
        innovative and exciting applications that combine a great user
        interface with a clean and efficient backend. I thrive on solving
        complex problems and exploring new technologies to enhance my skills
        and knowledge.
      </p>
      <br />
      <p>
        When I'm not working on coding projects, you can find me spending
        quality time with my two children, exploring new hiking trails, or
        indulging in my love for creating art. I believe that a balanced and
        fulfilled life outside of work is just as important as success in the
        professional realm.
      </p>
      <br />
      <p>
        My goal as a developer is to continue to learn and grow, and to
        collaborate with others to create cutting-edge applications that have a
        positive impact on people's lives. I value clear communication,
        attention to detail, and a willingness to take on challenges and learn
        from them.
      </p>
    </div>
  }
/>

        <AboutMe />
        <Footer />
    </div>
    );
};

export default About;