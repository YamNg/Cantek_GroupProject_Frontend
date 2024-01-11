import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menuReducer";
import threadListReducer from "../reducers/threadListReducer";
import threadDetailReducer from "../reducers/threadDetailReducer";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    threadList: threadListReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
