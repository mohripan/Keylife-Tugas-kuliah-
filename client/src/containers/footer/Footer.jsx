import React from "react";
import "./footer.css";
import keylifeLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="keylife__footer section__padding">
      <div className="keylife__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="keylife__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="keylife__footer-links">
        <div className="keylife__footer-links_logo">
          <img src={keylifeLogo} alt="logo" style={{width: '120px', height: '120px', textAlign: 'center'}} />
          <p>KOPI HITAM, All Rights Reserved</p>
        </div>
        <div className="keylife__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="keylife__footer-links_div">
          <h4>Company</h4>
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="keylife__footer-links_div">
          <h4>Get in touch</h4>
          <p>KOPI HITAM</p>
          <p>085-132567</p>
          <p>kopihitam@payme.net</p>
        </div>
      </div>
      <div className="keylife__footer-copyright">
        <p>© 2022 Keylife. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
