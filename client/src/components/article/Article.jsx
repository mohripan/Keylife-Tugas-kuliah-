import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, price }) => {
  return (
    <div className="keylife__blog-container_article">
      <div className="keylife__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="keylife__blog-container_article-content">
        <div>
          <p>Last Updated: {date}</p>
          <h3>{title}</h3>
        </div>
        <h4 style={{color: 'white'}}>{`RP. ${price}`}</h4>
      </div>
    </div>
  );
};

export default Article;
