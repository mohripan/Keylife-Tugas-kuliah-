import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <div className="keylife__navbar__input">
        <input type="text" placeholder="Search for anything" />
        <button type="button">Find a course</button>
    </div>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="keylife__navbar" style={scrollPosition > 980 ? {
      position: "fixed",
      backgroundColor: "rgba(14, 5, 26, 0.726)",
    } : {}}>
      <div className="keylife__navbar-links">
        <div className="keylife__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="keylife__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="keylife__navbar-sign">
      <p>
      <a href="#possibility">Learning</a>
    </p>
    <p>
      <a href="#features">Cart</a>
    </p>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="keylife__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="keylife__navbar-menu_container scale-up-center">
            <div className="keylife__navbar-menu_container-links">
              <Menu/>
              <div className="keylife__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;