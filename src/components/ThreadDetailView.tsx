import ThreadDetailViewCommentList from "./ThreadDetailViewCommentList";
import { useMatch } from "react-router";
import { AppDispatch } from "../config/store";
import { useDispatch } from "react-redux";
import { createContext, useEffect } from "react";
import { initializeThreadDetail } from "../reducers/threadDetailReducer";
import ThreadDetailViewNav from "./ThreadDetailViewNav";
import { useParams } from "react-router-dom";

const ThreadDetailView = () => {
  const dispatch: AppDispatch = useDispatch();
  const { thread: threadId, pageNumber } = useParams();

  useEffect(() => {
    if (threadId) {
      if (!pageNumber) dispatch(initializeThreadDetail(threadId, 1));
      else dispatch(initializeThreadDetail(threadId, Number(pageNumber)));
    }
  }, [dispatch, threadId, pageNumber]);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll md:border-solid md:border-l md:border-gray min-w-full md:min-w-[30%] md:w-1/2 lg:w-2/3">
      <ThreadDetailViewNav />
      <ThreadDetailViewCommentList />
    </div>
  );
};

export const SharedRefContext = createContext({});

export default ThreadDetailView;
