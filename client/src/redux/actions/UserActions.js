import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_DETAILS_RESET, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL } from "../constants/UserConstants";
import Axios from "axios";


export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        const {data} = await Axios.post(`/api/users/login`, {email, password}, config);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({type: USER_LOGOUT});
    document.location.href = "/login/1";
}

export const register = (nim, username, email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        const {data} = await Axios.post(`/api/users`, {nim, username, email, password}, config);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const getUserDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_RESET
        });

        const { 
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await Axios.get(`/api/users/${id}`, config);
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
    }
    catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;

        if(message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: message,
        })
    }
}