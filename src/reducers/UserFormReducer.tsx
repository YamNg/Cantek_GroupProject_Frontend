import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { IUserForm } from "../models/component/userForm.component";
import userService from "../services/userService";
import Cookies from "js-cookie";

const userFormSlice = createSlice({
  name: "userForm",
  initialState: {
    isActive: false,
    isLogin: false,
    userId: "",
    username: "",
    userNo: -1,
  } as IUserForm,
  reducers: {
    loginFormNegateActive(state) {
      return { ...state, isActive: !state.isActive };
    },
    setUserData(state, action) {
      return {
        ...state,
        isLogin: action.payload.login,
        userId: action.payload.userId,
        username: action.payload.username,
        userNo: action.payload.userNo,
      };
    },
    clearUserData(state) {
      return {
        ...state,
        isLogin: false,
        userId: "",
        username: "",
        userNo: -1,
      };
    },
  },
});

export const { loginFormNegateActive, clearUserData, setUserData } =
  userFormSlice.actions;

export const initializeLoginForm = () => {
  return async (dispatch: Dispatch) => {
    dispatch(clearUserData());
    dispatch(loginFormNegateActive());
  };
};

export const userLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return async (dispatch: Dispatch) => {
    const user = await userService.login({ email, password });
    dispatch(
      setUserData({
        isLogin: true,
        userId: user?.userId,
        username: user?.username,
        userNo: user?.userNo,
      })
    );
    dispatch(loginFormNegateActive());
  };
};

export const userLogout = ({ userId }: { userId: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(clearUserData());
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    userService.logout({ userId });
  };
};

export default userFormSlice.reducer;
