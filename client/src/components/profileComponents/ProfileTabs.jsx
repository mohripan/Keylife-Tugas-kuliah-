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
              id="logname"
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
              id="logname"
              autoComplete="off"
            />
            <Icon icon="icon-park-outline:edit-name" className="keylife__login-input-icon" />
          </div>
        </div>

        <div className="col-md-6 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="firstname"
              className="form-style"
              placeholder="Last Name"
              id="logname"
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
              type="text"
              name="firstname"
              className="form-style"
              placeholder="Last Name"
              id="logname"
              autoComplete="off"
            />
            <Icon icon="carbon:password" className="keylife__login-input-icon" />
          </div>
        </div>
        <button type="submit">Confirm Registration</button>
      </form>
    </>
  );
};

export default ProfileTabs;
