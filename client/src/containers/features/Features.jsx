import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Our competencies focus exclusively on in‑demand digital technologies and ensure workplace relevance.",
  },
  {
    title: "Join with the community and share your network",
    text: "Assess talent gaps to accurately benchmark and prioritize innovation projects. Align organizational goals and define workforce transformation strategy, with competencies curated to the individual level.",
  }
];

const Features = () => {
  return (
    <div className="keylife__features section__padding" id="features">
      <div className="keylife__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="keylife__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
