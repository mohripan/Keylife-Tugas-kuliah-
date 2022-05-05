import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./import";
import "./brand.css";

const Brand = () => {
  return (
    <div>
      <h1 className="gradient__text keylife__brand-title">The trusted market leader in talent transformation.</h1>
      <div className="keylife__brand section__padding">
        <div>
          <img src={google} alt="google-pic" />
        </div>
        <div>
          <img src={slack} alt="slack-pic" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian-pic" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox-pic" />
        </div>
        <div>
          <img src={shopify} alt="shopify-pic" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
