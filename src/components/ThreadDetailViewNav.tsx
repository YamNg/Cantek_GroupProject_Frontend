import addCommentLogo from "../assets/icon/comment-add.svg";
import elevatorLogo from "../assets/icon/elevator.svg";
import arrowLeftLogo from "../assets/icon/arrow-left.svg";
import { useDispatch, useSelector } from "react-redux";
import { IThreadDetailComponentState } from "../models/component/thread-detail.component.interface";
import { AppDispatch } from "../config/store";
import { resetThreadDetail } from "../reducers/threadDetailReducer";
import { Link, useParams } from "react-router-dom";

const ThreadDetailViewNav = () => {
  const dispatch: AppDispatch = useDispatch();

  const threadDetailViewState = useSelector(
    ({ threadDetail }: { threadDetail: IThreadDetailComponentState }) => {
      return threadDetail;
    }
  );

  const { topicId } = useParams();

  return (
    <div className="top-0 h-10 z-20 w-full fixed bg-white text-white md:w-1/2 lg:w-2/3">
      <div className="flex bg-gray-900/95 items-center">
        <div className="p-2 cursor-pointer hover:bg-gray-700 md:hidden">
          <Link
            to={`/topic/${topicId}`}
            onClick={() => dispatch(resetThreadDetail())}
          >
            <div className="flex">
              <img
                src={arrowLeftLogo}
                className="h-8 w-8"
                alt="arrow"
                width="40px"
                height="40px"
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center pl-5 py-2 h-12 grow">
          <h1 className="w-10 grow text-left text-ellipsis overflow-hidden whitespace-nowrap">
            {threadDetailViewState.title}
          </h1>
        </div>

        {threadDetailViewState._id !== "" ? (
          <div className="flex mr-2 items-center">
            <div className="flex flex-col items-center cursor-pointer hover:bg-gray-700">
              <div className="flex p-[0.625rem]">
                <img
                  src={elevatorLogo}
                  className="h-7 w-7"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:bg-gray-700">
              <div className="flex p-[0.625rem]">
                <img
                  src={addCommentLogo}
                  className="h-7 w-7"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ThreadDetailViewNav;
