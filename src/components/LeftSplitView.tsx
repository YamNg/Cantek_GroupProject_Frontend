import hamburgerLogo from "../assets/icon/hamburger.svg";
import refreshLogo from "../assets/icon/refresh.svg";
import addPostLogo from "../assets/icon/add-post.svg";
import beerCanLogo from "../assets/icon/can-of-beer.svg";
import LeftSplitViewNav from "./LeftSplitViewNav";
import LeftSplitViewThreadList from "./LeftSplitViewThreadList";
import { AppDispatch } from "../config/store";
import { useDispatch } from "react-redux";
import { useMatch } from "react-router-dom";
import { initializeThreadList } from "../reducers/threadListReducer";

const LeftSplitView = () => {
  const dispatch: AppDispatch = useDispatch();

  const match = useMatch("/topic/:topicId");
  if (match) {
    dispatch(initializeThreadList(String(match.params.topicId)));
  }

  return (
    <div className="h-screen min-w-full md:min-w-[30%] md:w-1/2 lg:w-1/3 overflow-y-scroll">
      <LeftSplitViewNav />
      <LeftSplitViewThreadList />

      {/* footer for mobile view */}
      <div className="flex fixed h-10 w-full bottom-0 bg-gray-950 md:hidden">
        <span className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800">
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
        </span>

        <span className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800">
          <img
            src={refreshLogo}
            className="h-7 w-7"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </span>

        <span className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800">
          <img
            src={addPostLogo}
            className="h-8 w-8"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </span>
      </div>
    </div>
  );
};

export default LeftSplitView;
