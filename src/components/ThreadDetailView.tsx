import ThreadDetailViewCommentList from "./ThreadDetailViewCommentList";
import { useMatch } from "react-router";
import { AppDispatch } from "../config/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeThreadDetail } from "../reducers/threadDetailReducer";
import ThreadDetailViewNav from "./ThreadDetailViewNav";

const ThreadDetailView = () => {
  const dispatch: AppDispatch = useDispatch();

  const match = useMatch("/topic/:topicId/thread/:threadId/page/:pageNum");
  const threadId = match?.params.threadId;
  const pageNum = match?.params.pageNum ? Number(match.params.pageNum) : 1;

  console.log(pageNum);

  useEffect(() => {
    if (threadId && pageNum)
      dispatch(initializeThreadDetail(threadId, pageNum));
  }, [dispatch, threadId]);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll md:border-solid md:border-l md:border-gray min-w-full md:min-w-[30%] md:w-1/2 lg:w-2/3">
      <ThreadDetailViewNav />
      <ThreadDetailViewCommentList />
    </div>
  );
};

export default ThreadDetailView;
