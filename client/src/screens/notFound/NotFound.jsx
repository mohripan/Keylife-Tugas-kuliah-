import React from "react";
import {Navbar} from "../../components";
import {Footer} from "../../containers";
import "./notFound.scss";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 style={{color: 'white'}} className="text-center mb-2 mb-sm-5">Page Not Found</h4>
          <img
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src="/images/not-found.png"
            alt="Not-found"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;