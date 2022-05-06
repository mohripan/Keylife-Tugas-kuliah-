import React from 'react';
import './login.scss';
import {Navbar} from '../../components';
import {Footer} from '../../containers';
import { Icon } from '@iconify/react';

const login = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
    <div className="keylife__login">
      <div classNameName="row full-height justify-content-center">
        <div className="col-12 text-center align-self-center py-5">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input className="keylife__login-checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label for="reg-log"></label>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="keylife__login-masuk">
                        <a href="#"><i className="fa-brands fa-google fa-2x"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook fa-2x"></i></a>
                      </div>
                      <div className="form-group">
                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"></input>
                        <Icon icon="uil:user" className="keylife__login-input-icon" />
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                        <Icon icon="carbon:password" className="keylife__login-input-icon" />
                      </div>
                      <a href="#" className="keylife__login-btn mt-4">submit</a>
                      <p className="mb-0 mt-4 text-center"><a href="#0" className="keylife__login-link">Forgot your password?</a></p>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Sign Up</h4>
                      <div className="form-group">
                        <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                        
                      </div>
                      <div className="form-group mt-2">
                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                        <i className="keylife__login-input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                        <i className="keylife__login-input-icon uil uil-lock-alt"></i>
                      </div>
                      <a href="#" className="btn mt-4">submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default login;