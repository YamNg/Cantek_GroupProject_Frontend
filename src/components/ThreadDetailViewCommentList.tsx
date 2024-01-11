import thumbUpLogo from "../assets/icon/thumb-up.svg";
import thumbDownLogo from "../assets/icon/thumb-down.svg";
import replyLogo from "../assets/icon/reply.svg";
import { IThreadDetailComponentState } from "../models/component/thread-detail.component.interface";
import { useSelector } from "react-redux";
import { dateStringFormatter } from "../utils/dateStringFormatter";
import { useParams } from "react-router-dom";

const ThreadDetailViewCommentList = () => {
  const { thread: threadId, pageNumber } = useParams();
  const pageDivKey = threadId + (pageNumber ? "-" + pageNumber : "");

  const threadDetailPages = useSelector(
    ({ threadDetail }: { threadDetail: IThreadDetailComponentState }) => {
      return threadDetail.pages;
    }
  );

  return (
    <div className="flex flex-col mt-10 mb-10 md:mb-0">
      {threadDetailPages.map((page) => {
        return (
          <div key={pageDivKey}>
            <h1>Page {page.pageNumber}</h1>
            {page.comments.map((comment) => {
              return (
                <div
                  key={comment._id}
                  className="relative px-6 py-3 border-b-2 border-black-500"
                >
                  <div className="pb-1 flex gap-2 items-center">
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      {comment.author}
                    </span>
                    <span className="text-xs">
                      {dateStringFormatter(comment.createdAt)}
                    </span>
                    <img
                      src={replyLogo}
                      className="h-4 w-4 ml-auto cursor-pointer hover:invert-[.5]"
                      alt="arrow"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <span className="max-h-24 overflow-hidden break-words">
                    {comment.content}
                  </span>
                  <div className="flex gap-2">
                    <div className="flex w-max mt-3 p-2 gap-3 border border-black border-solid rounded">
                      <div className="flex gap-1 items-center">
                        <img
                          src={thumbUpLogo}
                          className="h-3 w-3 cursor-pointer hover:invert-[.5]"
                          alt="arrow"
                        />
                        <span className="text-xs">{comment.upvote}</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <img
                          src={thumbDownLogo}
                          className="h-3 w-3 cursor-pointer hover:invert-[.5]"
                          alt="arrow"
                        />
                        <span className="text-xs">{comment.downvote}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ThreadDetailViewCommentList;
