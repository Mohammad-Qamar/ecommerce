import React from "react";
import "./Contact.css";
import desktop from "../../Images/contact_img.png";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Side - Image */}
        <div className="contact-left">
          <img src={desktop} alt="Contact Us" />
        </div>

        {/* Right Side - Contact Details */}
        <div className="contact-right">
          <h1>CONTACT US</h1>

          <div className="contact-info">
            <p>
              <strong>Owner's :</strong> Mr Zaid & Mr Faiz
            </p>
            <p>
              <strong>Our Store's:</strong> 54709 Willms Station Suite 350,
              Washington, USA{" "}
            </p>
            <p>
              <strong>Contact Person:</strong> Mike Johnson
            </p>
            <p>
              <strong>Address:</strong> 54709 Willms Station Suite 350,
              Washington, USA
            </p>
            <p>
              <strong>Tel:</strong> (415) 555‑0132
            </p>
            <p>
              <strong>Email:</strong> greatstackdev@gmail.com
            </p>
            <button className="explore-jobs">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};
