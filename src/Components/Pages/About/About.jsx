import React from "react";
import "./About.css";
import logo from "../../Logo/short_Logo.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-left">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Right Side - About Content */}
        <div className="about-right">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae fugit facilis nesciunt? Sed dolorem, ipsam repudiandae
            delectus enim molestiae, suscipit doloremque exercitationem
            voluptatibus unde ut? Ullam placeat hic sed mollitia.
          </p>

          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis neque itaque est. Adipisci ea ratione doloribus.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section (Separate from Main Content) */}
      <div className="choose-section">
        <h2>WHY CHOOSE US</h2>
      </div>

      <div className="about-features">
        <div className="feature">
          <h3>Quality</h3>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="feature">
          <h3>Ease of Use</h3>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="feature">
          <h3>Customer Support</h3>
          <p>Our dedicated team ensures your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
