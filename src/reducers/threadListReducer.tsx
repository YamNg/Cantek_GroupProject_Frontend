import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { IThreadListComponentState } from "../models/component/thread-list.component.interface";
import { IThreadListItem } from "../models/api/thread-list.api.interface";
import threadService from "../services/threadService";

const threadListSlice = createSlice({
  name: "threadList",
  initialState: {
    selectedTopic: {},
    threadList: [] as IThreadListItem[],
  } as IThreadListComponentState,
  reducers: {
    setThreadListAndTopic(state, action) {
      return {
        ...state,
        threadList: action.payload.threadList,
        selectedTopic: action.payload.selectedTopic,
      };
    },
    mergeThreadList(state, action) {
      return {
        ...state,
        threadList: state.threadList.concat(action.payload.threadList),
      };
    },
  },
});

export const { setThreadListAndTopic, mergeThreadList } =
  threadListSlice.actions;

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

export const loadNextThreadPage = (topic: string, lastThreadId: string) => {
  return async (dispatch: Dispatch) => {
    let apiResponse;
    if (topic === "latest") {
      apiResponse = await threadService.getLatestThreads({ lastThreadId });
    } else {
      apiResponse = await threadService.getThreadsByTopic({
        topicId: topic,
        lastThreadId,
      });
    }

    dispatch(
      mergeThreadList({
        threadList: apiResponse?.threads,
      })
    );
  };
};

export default threadListSlice.reducer;
