import { createSlice } from "@reduxjs/toolkit";
import { IResponseResultMessageState } from "../models/component/responseMsg.component";

const responseMsgSlice = createSlice({
  name: "responseResultMessage",
  initialState: {
    isActive: false,
    isSuccess: false,
    errorMessage: "",
  } as IResponseResultMessageState,
  reducers: {
    hideResponseMsg() {
      return {
        isActive: false,
        isSuccess: false,
        errorMessage: "",
      };
    },
    showResponseMsg(_, action) {
      return {
        isActive: true,
        isSuccess: action.payload.isSuccess,
        errorMessage: action.payload.errorMessage,
      };
    },
  },
});

export const { hideResponseMsg, showResponseMsg } = responseMsgSlice.actions;

export default responseMsgSlice.reducer;
