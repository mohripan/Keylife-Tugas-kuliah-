import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="keylife__header section__padding" id="home">
      <div className="keylife__header-content">
        <h1 className="gradient__text">
          Let us learn something amazing with Keylife
        </h1>
        <p>
        Your future’s wide open, and so is our course library. Learn more for less. Subsrcibe to our email to get discount information.
        </p>
        <div className="keylife__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="keylife__header-content__people">
          <img src={people} alt="people-pic" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="keylife__header-image">
        <img src={ai} alt="ai-pic" />
      </div>
    </div>
  );
};

export default Header;
