import thumbUpLogo from "../assets/icon/thumb-up.svg";
import thumbDownLogo from "../assets/icon/thumb-down.svg";
import { useSelector } from "react-redux";
import { IThreadList } from "../models/component/thread-list.component.interface";
import { commentDateStringFormatter } from "../utils/CommentDateStringFormatter";

const LeftSplitViewThreadList = () => {
  const { threadList } = useSelector(
    ({ threadList }: { threadList: IThreadList }) => {
      return threadList;
    }
  );

  return (
    <div className="flex flex-col mt-10 mb-10 md:mb-0 w-full">
      {threadList.map((thread) => {
        return (
          <div
            key={thread._id}
            className="relative px-6 py-3 border-b-2 border-black-500"
          >
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600">{thread.username}</span>
              <span className="text-xs">
                {commentDateStringFormatter(thread.createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <img
                  src={thread.vote >= 0 ? thumbUpLogo : thumbDownLogo}
                  className="h-4 w-4"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
                <span className="text-xs">{thread.vote}</span>
              </span>
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              {thread.title}
            </span>
            <a
              href="#1"
              className="absolute top-0 left-0 w-full h-full hover:bg-blue-900/10"
            ></a>
          </div>
        );
      })}
    </div>
  );
};

export default LeftSplitViewThreadList;
