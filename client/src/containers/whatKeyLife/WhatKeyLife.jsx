import React from "react";
import { Feature } from "../../components";
import "./whatKeyLife.css";

const WhatKeyLife = () => {
  return (
    <div className="keylife__whatkeylife section__margin" id="wkeylife">
      <div className="keylife__whatkeylife-feature">
        <Feature
          title="What is Keylife"
          text="Changing lives, businesses, and nations through talent transformation in digital technologies. Our mission is to prepare students from various universities to improve their skills and be ready for a job or even make their own startup."
        />
      </div>
      <div className="keylife__whatkeylife-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="keylife__whatkeylife-container">
        <Feature
          title="Impact"
          text="Use our proven playbook to achieve targeted results that increase retention and productivity. Consistently deliver quantifiable outcomes that matter to ROI and business growth, while gaining productivity and a competitive advantage in the market."
        />
        <Feature
          title="Knowledgebase"
          text="Curriculum co-created with industry leaders. Keylife offers the best and fastest solution for students to grow and get a job-ready skills anytime you need."
        />
        <Feature
          title="Hands-on projects"
          text="Learn from experts in their fields and let them guide you and get personal feedback from industry to ensure your mastery."
        />
      </div>
    </div>
  );
};

export default WhatKeyLife;
