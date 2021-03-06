import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import ReactJsAlert from "reactjs-alert";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { logout } from "../../redux/actions/UserActions";

const Menu = ({ setStatus, setType, setTitle }) => (
  <>
    <div className="keylife__navbar__input">
      <input type="text" placeholder="Search for anything" />
      <button
        // onClick={() => {
        //   setStatus(true);
        //   setType("success");
        //   setTitle("This is a success alert");
        // }}
        type="button"
      >
        Find a course
      </button>
    </div>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [status, setStatus] = useState(false);
  // const [type, setType] = useState("success");
  // const [title, setTitle] = useState("This is a alert");

  const dispatch = useDispatch();


  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
    dispatch(logout());
  }

  return (
    <div className="keylife__navbar" id="navbars">
      <div className="keylife__navbar-links">
        <div className="keylife__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="keylife__navbar-links_container">
          <Menu />
          {/* <ReactJsAlert
            status={status} // true or false
            type={type} // success, warning, error, info
            title={title}
            quotes={true}
            quote="This is a dummy design that shows an example of reactjs-alert"
            Close={() => setStatus(false)}
          /> */}
        </div>
      </div>
      <div className="keylife__navbar-sign">
        <p>
          <a href="#possibility">Learning</a>
        </p>
        <p>
          <Link to="/cart/101">Cart</Link>
          <span className="badge">{cartItems.length}</span>
        </p>
        {
          userInfo ? (
            <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </div>
                  </div>
          ) : (
            <>
            <Link to="/login/1">
            <p>Sign in</p>
          </Link>
          <Link to="/login/2">
            <button type="button">Sign up</button>
          </Link>
          </>  
          )
        }

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
              <Menu
              // setStatus={setStatus}
              // setType={setType}
              // setTitle={setTitle}
              />
              {/* <ReactJsAlert
                status={status} // true or false
                type={type} // success, warning, error, info
                title={title}
                quotes={true}
                quote="This is a dummy design that shows an example of reactjs-alert"
                Close={() => setStatus(false)}
              /> */}
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
