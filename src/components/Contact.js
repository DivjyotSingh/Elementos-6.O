import React from "react";
import "./Contact.css";
import SocialMedia from "../Container/Media";
import { contactInfo } from "../info";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">
                {contactInfo.title}
            </h1>
            <p className="subTitle contact-subtitle">
              {contactInfo.subtitle}
            </p>

            <div className="contact-text-div">
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
                
              </a>
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              alt="Working"
              src=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Contact
