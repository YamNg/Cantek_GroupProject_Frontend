import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menuReducer";
import threadListReducer from "../reducers/threadListReducer";
import threadDetailReducer from "../reducers/threadDetailReducer";
import ContentFormReducer from "../reducers/ContentFormReducer";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    threadList: threadListReducer,
    threadDetail: threadDetailReducer,
    contentForm: ContentFormReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
