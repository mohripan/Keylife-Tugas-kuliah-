import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Message, Loading } from "../../components";
import { Footer } from "../../containers";
import { login, register } from "../../redux/actions/UserActions";
import { Icon } from "@iconify/react";
import "./login.scss";

const IsLogin = () => {
  const { id } = useParams();

  if (id === "1") {
    return (
      <input
        className="keylife__login-checkbox"
        autoComplete="off"
        type="checkbox"
        id="reg-log"
        name="reg-log"
      />
    );
  } else {
    return (
      <input
        className="keylife__login-checkbox"
        autoComplete="off"
        type="checkbox"
        id="reg-log"
        name="reg-log"
        defaultChecked
      />
    );
  }
};

const Login = () => {
  const [nim, setNim] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const userRegister = useSelector((state) => state.userRegister);

  const { error, loading, userInfo } = userLogin;
  const {registError, registLoading, registUserInfo} = userRegister;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userInfo || registUserInfo) {
      navigate(redirect);
    }
  }, [userInfo, registUserInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register(nim,username,email, password));
  }

  return (
    <div className="gradient__bg">
      <Navbar />
      <div className="keylife__login">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}

            {registError && <Message variant="alert-danger">{error}</Message>}
            {registLoading && <Loading />}
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <IsLogin />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper" style={{height: '30rem'}}>
                  <div className="card-front" style={{height: '30rem'}}>
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="keylife__login-masuk">
                          <a href="#">
                            <i className="fa-brands fa-google fa-2x"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                          </a>
                        </div>
                        <form
                          style={{ width: "100%" }}
                          onSubmit={submitHandler}
                        >
                          <div className="keylife__login-form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <Icon
                              icon="carbon:email-new"
                              className="keylife__login-input-icon"
                            />
                          </div>
                          <div className="keylife__login-form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <Icon
                              icon="carbon:password"
                              className="keylife__login-input-icon"
                            />
                          </div>
                          <button
                            type="submit"
                            className="keylife__login-btn mt-4"
                          >
                            Login
                          </button>
                        </form>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="keylife__login-link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back" style={{height: '30rem'}}>
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="keylife__login-masuk">
                          <a href="#">
                            <i className="fa-brands fa-google fa-2x"></i>
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                          </a>
                        </div>
                        <form onSubmit={registerHandler}>
                        <div className="keylife__login-form-group">
                          <input
                            type="number"
                            name="nim"
                            className="form-style"
                            placeholder="Student ID"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                            id="nim"
                            autoComplete="off"
                          />
                          <Icon
              icon="arcticons:id-wallet"
              className="keylife__login-input-icon"
            />
                        </div>
                        <div className="keylife__login-form-group mt-2">
                          <input
                            type="text"
                            name="logname"
                            className="form-style"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="logname"
                            autoComplete="off"
                          />
                          <Icon
                            icon="uil:user"
                            className="keylife__login-input-icon"
                          />
                        </div>
                        <div className="keylife__login-form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="logemail"
                            autoComplete="off"
                          />
                          <Icon
                            icon="carbon:email-new"
                            className="keylife__login-input-icon"
                          />
                        </div>
                        <div className="keylife__login-form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="logpass"
                            autoComplete="off"
                          />
                          <Icon
                            icon="carbon:password"
                            className="keylife__login-input-icon"
                          />
                        </div>
                        <button className="keylife__login-btn mt-4" type="submit">Register</button>
                        </form>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <Footer />
    </div>
  );
};

export default Login;
