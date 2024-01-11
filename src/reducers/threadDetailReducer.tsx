import { Dispatch, createSlice } from "@reduxjs/toolkit";
import {
  IThreadDetailComponentPage,
  IThreadDetailComponentState,
} from "../models/component/thread-detail.component.interface";
import threadService from "../services/threadService";
import { IThreadDetail } from "../models/api/thread-detail.api.interface";

const threadDetailSlice = createSlice({
  name: "threadDetail",
  initialState: {
    _id: "",
    title: "",
    pages: [] as IThreadDetailComponentPage[],
    totalPage: 0,
    pageSize: 0,
  } as IThreadDetailComponentState,
  reducers: {
    setThreadDetail(state, action) {
      const pageObj: IThreadDetail = action.payload.body;
      const pageNumber: number = action.payload.page;

      const result = {
        _id: pageObj._id,
        title: pageObj.title,
        totalPage: pageObj.totalPage,
        pageSize: pageObj.pageSize,
      };

      let newPageList = [] as IThreadDetailComponentPage[];
      if (
        state.pages.findIndex((page) => page.pageNumber === pageNumber) === -1
      ) {
        // new page
        newPageList = state.pages.concat({
          pageNumber,
          comments: pageObj.comments,
        });
      } else {
        // existing page
        const updatedPage = {
          pageNumber,
          comments: pageObj.comments,
        };
        newPageList = state.pages.map((page) =>
          page.pageNumber !== pageNumber ? page : updatedPage
        );
      }

      // sort once for display
      newPageList.sort(
        (a: IThreadDetailComponentPage, b: IThreadDetailComponentPage) =>
          a.pageNumber - b.pageNumber
      );

      return {
        ...state,
        ...result,
        pages: newPageList,
      };
    },
  },
});

export const { setThreadDetail } = threadDetailSlice.actions;

export const initializeThreadDetail = (threadId: string) => {
  return async (dispatch: Dispatch) => {
    const apiResponse = await threadService.getThreadDetail({ threadId });
    dispatch(setThreadDetail(apiResponse));
  };
};

export default threadDetailSlice.reducer;
