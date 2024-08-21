import React from "react";
import "../styles/ContactInfo.css";

function ContactInfo() {
  return (
    <div className="background">
      <div className="square-container">
        <div className="content">
          <p className="head">Lets talk!</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/razbracha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt=""
                className="linkedin-image"
                src="/pictures/linkedin.png"
              />
            </a>
            <a
              href="https://www.github.com/RazBracha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" className="github-image" src="/pictures/github.png" />
            </a>
            <a
              href="https://www.facebook.com/raz.bracha.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt=""
                className="facebook-image"
                src="/pictures/facebook.png"
              />
            </a>
            <p className="mail">
              <a href="mailto:razi.bracha@gmail.com">
                {" "}
                <img
                  alt=""
                  className="email-image"
                  src="/pictures/email-picture.png"
                />
              </a>
            </p>
            <p className="copy-write">&copy; 2024 Raz Bracha</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
