import React from "react";
import './top.css';
import Arrow from '../../assets/up-arrow.png';

const Top = () => {
  return (
    <div className="keylife__top">
        <div className="keylife__top-content">
            <a href="#navbars"><img src={Arrow} alt="arrow" /></a>
        </div>
    </div>
  )
}

export default Top;