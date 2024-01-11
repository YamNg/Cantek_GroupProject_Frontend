import ThreadListViewNav from "./ThreadListViewNav";
import ThreadListViewItemList from "./ThreadListViewItemList";
import { AppDispatch } from "../config/store";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import {
  initializeThreadList,
  loadNextThreadPage,
} from "../reducers/threadListReducer";
import { useEffect } from "react";
import ThreadListViewFooter from "./ThreadListViewFooter";
import { isScrollReachBottom } from "../utils/htmlScrollEventDetector";
import { IThreadListComponentState } from "../models/component/thread-list.component.interface";
import { IThreadDetailComponentState } from "../models/component/thread-detail.component.interface";

const ThreadListView = () => {
  const dispatch: AppDispatch = useDispatch();

  const match = useMatch("/topic/:topicId/*");
  const pathTopicId = match?.params.topicId
    ? String(match.params.topicId)
    : "latest";

  useEffect(() => {
    dispatch(initializeThreadList(pathTopicId));
  }, [dispatch, pathTopicId]);

  const threadListState = useSelector(
    ({ threadList }: { threadList: IThreadListComponentState }) => {
      return threadList;
    }
  );

  const threadDetailViewState = useSelector(
    ({ threadDetail }: { threadDetail: IThreadDetailComponentState }) => {
      return threadDetail;
    }
  );

  const onScrollThreadListEvent = (e: React.UIEvent<HTMLElement>) => {
    if (isScrollReachBottom(e)) {
      const threadList = threadListState.threadList;
      const lastLoadedThread = threadList[threadList.length - 1];

      if (threadList.length > 0 && match)
        dispatch(
          loadNextThreadPage(String(match.params.topicId), lastLoadedThread._id)
        );
    }
  };

  return (
    <div
      className={`${
        threadDetailViewState._id === "" ? "block" : "hidden md:block"
      } h-screen min-w-full md:min-w-[30%] md:w-1/2 lg:w-1/3 overflow-y-scroll`}
      onScroll={(e) => onScrollThreadListEvent(e)}
    >
      <ThreadListViewNav />
      <ThreadListViewItemList />
      <ThreadListViewFooter />
    </div>
  );
};

export default ThreadListView;
