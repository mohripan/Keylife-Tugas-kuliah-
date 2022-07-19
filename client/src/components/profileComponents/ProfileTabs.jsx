import React, {useEffect, useState} from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import Toast from '../LoadingError/Toast';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import { updateUserProfile } from "../../redux/actions/UserActions";

const SelectUniversity = ({name, set}) => {
  if(name === "") {
    return (
      <select
              id="universities"
              className="form-control"
              name="universities"
              onChange = {(e) => set(e.target.value)}
            >
              <option style={{ display: "none" }} value="">
                Select University:
              </option>
              <option value="Harvard">Harvard</option>
              <option value="MIT">MIT</option>
              <option value="UNIKOM">UNIKOM</option>
              <option value="ITB">ITB</option>
            </select>
    )
  }
  else {
    return (
      <select
              id="universities"
              className="form-control"
              name="universities"
            >
              <option style={{ display: "none" }} value={name}>
                {name}
              </option>
              <option value="Harvard">Harvard</option>
              <option value="MIT">MIT</option>
              <option value="UNIKOM">UNIKOM</option>
              <option value="ITB">ITB</option>
            </select>
    )
  }
}

const ProfileTabs = () => {
  const [nim, setNim] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [university, setUniversity] = useState("");
  const toastId = React.useRef(null);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose:2000,
  }

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const {loading, error, user} = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {loading: updateLoading} = userDetails;

  useEffect(() => {
    if(user) {
      setUsername(user.username);
      setEmail(user.email);
      setNim(user.nim);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({id:user._id, nim, username, email, firstName, lastName, university, password}))
  }

  return (
    <>
    <Toast/>
    {error && <Message variant="alert-danger">{error}</Message>}
    {loading && <Loading/>}
    {updateLoading && <Loading/>}
      <form className="row form-container" onSubmit={submitHandler}>
      <div className="col-md-12 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="nim"
              className="form-style"
              placeholder="Student ID"
              required
              id="nim"
              autoComplete="off"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
            />
            <Icon
              icon="arcticons:id-wallet"
              className="keylife__login-input-icon"
            />
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="email"
              className="form-style"
              placeholder="Email"
              required
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Icon
              icon="carbon:email-new"
              className="keylife__login-input-icon"
            />
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="username"
              className="form-style"
              placeholder="Username"
              required
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Icon
              icon="uil:user"
              className="keylife__login-input-icon"
            />
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
              value = {firstName}
              onChange = {(e) => setFirstName(e.target.value)}
              autoComplete="off"
            />
            <Icon
              icon="icon-park-outline:edit-name"
              className="keylife__login-input-icon"
            />
          </div>
        </div>

        <div className="col-md-6 p-4">
          <div className="keylife__login-form-group">
            <input
              type="text"
              name="lastname"
              className="form-style"
              placeholder="Last Name"
              value = {lastName}
              onChange = {(e) => setLastName(e.target.value)}
              id="lastname"
              autoComplete="off"
            />
            <Icon
              icon="icon-park-twotone:edit-name"
              className="keylife__login-input-icon"
            />
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="keylife__detail-sign-up-input-dropdown">
            <SelectUniversity name={university} set={setUniversity}/>
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="keylife__login-form-group">
            <input
              type="password"
              name="confirm"
              className="form-style"
              placeholder="Confirm Password"
              required
              id="confirm_password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <Icon
              icon="carbon:password"
              className="keylife__login-input-icon"
            />
          </div>
        </div>
        <div
          style={{ paddingTop: "1.2rem", margin: "auto", textAlign: "center" }}
        >
          <button type="submit">Edit Profile</button>
        </div>
      </form>
    </>
  );
};

export default ProfileTabs;
