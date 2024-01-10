import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menuReducer";
import threadListReducer from "../reducers/threadListReducer";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    threadList: threadListReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
