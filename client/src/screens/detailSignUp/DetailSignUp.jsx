import React from 'react';
import {Navbar, Orders, ProfileTabs} from '../../components';
import {Footer} from '../../containers';
import './detailSignUp.scss';

const DetailSignUp = () => {
  return (
      <div>
    <div className="container mt-lg-5 mt-3 keylife__account-settings">
        <div className="row align-items-start">
          {/* <div className="col-lg-4 p-0 shadow">
            <div className="keylife__account-settings-author-card pb-0 pb-md-3">
              <div className="keylife__account-settings-author-card-cover"></div>
              <div className="keylife__account-settings-author-card-profile row">
                <div className="keylife__account-settings-author-card-avatar col-md-5">
                  <img src="./images/user.png" alt="userprofileimage" />
                </div>
                <div className="keylife__account-settings-author-card-details col-md-7">
                  <h5 style={{color: 'white'}} className="keylife__account-settings-author-card-name mb-2">
                    <strong>Admin Doe</strong>
                  </h5>
                  <span style={{color: 'white'}} className="keylife__account-settings-author-card-position">
                    <>Joined Dec 12 2021</>
                  </span>
                </div>
              </div>
            </div>
            <div className="keylife__account-settings-wizard pt-3 ">
              <div class="d-flex align-items-start">
                <div
                  class="keylife__account-settings-nav align-items-start flex-column col-12 nav-pills me-3 "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile Settings
                  </button>
                  <button
                    class="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Orders List
                    <span className="badge2">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* panels */}
          <div
            class="tab-content col-lg-12 pb-6 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProfileTabs />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <Orders />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default DetailSignUp;