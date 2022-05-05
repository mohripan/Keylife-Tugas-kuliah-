import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="keylife__blog section__padding" id="blog">
      <div className="keylife__blog-heading">
        <h1 className="gradient__text">
          Most popular courses in Keylife.
        </h1>
      </div>
      <div className="keylife__blog-container">
        <div className="keylife__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="229.000"
          />
        </div>
        <div className="keylife__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="109.000"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="98.000"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="203.000"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            price="172.000"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
