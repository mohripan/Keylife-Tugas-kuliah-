import React from "react";
import { Icon } from '@iconify/react';

const ProfileTabs = () => {
  return (
    <>
      <form className="row form-container">

      <div className="col-md-12 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="id"
              className="form-style"
              placeholder="Student ID"
              id="idstudent"
              autoComplete="off"
            />
            <Icon icon="arcticons:id-wallet" className="keylife__login-input-icon" />
          </div>
        </div>

        <div className="col-md-6 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="firstname"
              className="form-style"
              placeholder="First Name"
              id="firstname"
              autoComplete="off"
            />
            <Icon icon="icon-park-outline:edit-name" className="keylife__login-input-icon" />
          </div>
        </div>

        <div className="col-md-6 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="lastname"
              className="form-style"
              placeholder="Last Name"
              id="lastname"
              autoComplete="off"
            />
            <Icon icon="icon-park-twotone:edit-name" className="keylife__login-input-icon" />
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="keylife__detail-sign-up-input-dropdown">
            <select
              id="universities"
              classname="form-control"
              name="universities"
            >
              <option style={{display: 'none'}} value="0">Select Universities:</option>
              <option value="1">Harvard</option>
              <option value="2">MIT</option>
              <option value="3">UNIKOM</option>
              <option value="4">ITB</option>
            </select>
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="keylife__login-form-group">
            <input
              type="password"
              name="confirm"
              className="form-style"
              placeholder="Confirm Password"
              id="confirm_password"
              autoComplete="off"
            />
            <Icon icon="carbon:password" className="keylife__login-input-icon" />
          </div>
        </div>
        <div style={{paddingTop: "1.2rem", margin: "auto", textAlign: "center"}}>
          <button type="submit">Confirm Registration</button>
        </div>
      </form>
    </>
  );
};

export default ProfileTabs;
