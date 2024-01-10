import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { IThreadList } from "../models/component/thread-list.component.interface";
import { IThreadListItem } from "../models/api/thread-list.api.interface";
import threadService from "../services/threadService";

const threadListSlice = createSlice({
  name: "threadList",
  initialState: {
    selectedTopic: {},
    threadList: [] as IThreadListItem[],
  } as IThreadList,
  reducers: {
    setThreadListAndTopic(state, action) {
      return {
        ...state,
        threadList: action.payload.threadList,
        selectedTopic: action.payload.selectedTopic,
      };
    },
  },
});

export const { setThreadListAndTopic } = threadListSlice.actions;

export const initializeThreadList = (topic: string) => {
  return async (dispatch: Dispatch) => {
    let apiResponse;
    if (topic === "latest") {
      apiResponse = await threadService.getLatestThreads({});
    } else {
      apiResponse = await threadService.getThreadsByTopic({ topicId: topic });
    }
    dispatch(
      setThreadListAndTopic({
        threadList: apiResponse?.threads,
        selectedTopic: apiResponse?.topic,
      })
    );
  };
};

export default threadListSlice.reducer;
