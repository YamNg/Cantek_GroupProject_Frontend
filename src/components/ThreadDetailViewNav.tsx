import replyWriteLogo from "../assets/icon/reply-white.svg";
import thumbUpWhiteLogo from "../assets/icon/thumb-up-white.svg";
import thumbDownWhiteLogo from "../assets/icon/thumb-down-white.svg";
import { useSelector } from "react-redux";
import { IThreadDetailComponentState } from "../models/component/thread-detail.component.interface";

const ThreadDetailViewNav = () => {
  const threadDetailViewState = useSelector(
    ({ threadDetail }: { threadDetail: IThreadDetailComponentState }) => {
      return threadDetail;
    }
  );

  return (
    <div className="top-0 h-10 z-20 w-full fixed bg-white text-white md:w-1/2 lg:w-2/3">
      <div className="flex bg-gray-900/95 items-center">
        <span className="p-2 cursor-pointer hover:bg-gray-700 hidden md:block"></span>
        <div className="flex items-center p-2 h-12 grow">
          <h1 className="w-10 grow text-left text-ellipsis overflow-hidden whitespace-nowrap">
            {threadDetailViewState.title}
          </h1>
        </div>

        <div className="flex gap-2 mr-3 items-center">
          <div className="flex flex-col items-center cursor-pointer hover:bg-gray-700">
            <span className="p-2">
              <div className="flex">
                <img
                  src={replyWriteLogo}
                  className="h-7 w-5"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetailViewNav;
