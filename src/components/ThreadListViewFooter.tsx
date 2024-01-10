import hamburgerLogo from "../assets/icon/hamburger.svg";
import refreshLogo from "../assets/icon/refresh.svg";
import addPostLogo from "../assets/icon/add-post.svg";
import beerCanLogo from "../assets/icon/can-of-beer.svg";
import { AppDispatch } from "../config/store";
import { useDispatch } from "react-redux";
import { menuNegateActive } from "../reducers/menuReducer";
import { useMatch } from "react-router-dom";
import { initializeThreadList } from "../reducers/threadListReducer";

const ThreadListViewFooter = () => {
  const dispatch: AppDispatch = useDispatch();

  const match = useMatch("/topic/:topicId");

  return (
    <div className="flex fixed h-10 w-full bottom-0 bg-gray-950 md:hidden">
      <div
        className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800"
        onClick={() => dispatch(menuNegateActive())}
      >
        <img
          src={hamburgerLogo}
          className="h-7 w-7"
          alt="arrow"
          width="40px"
          height="40px"
        />
        <img
          src={beerCanLogo}
          className="h-7 w-7"
          alt="arrow"
          width="40px"
          height="40px"
        />
      </div>

      <div
        className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800"
        onClick={() =>
          dispatch(initializeThreadList(String(match?.params.topicId)))
        }
      >
        <img
          src={refreshLogo}
          className="h-7 w-7"
          alt="arrow"
          width="40px"
          height="40px"
        />
      </div>

      <div className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800">
        <img
          src={addPostLogo}
          className="h-8 w-8"
          alt="arrow"
          width="40px"
          height="40px"
        />
      </div>
    </div>
  );
};

export default ThreadListViewFooter;
