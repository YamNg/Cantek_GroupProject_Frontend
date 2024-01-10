import Menu from "./components/Menu";
import { AppDispatch } from "./config/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeMenu } from "./reducers/menuReducer";
import { Routes } from "react-router";
import LeftSplitView from "./components/LeftSplitView";
import { Navigate, Route } from "react-router-dom";

const App = () => {
  // trigger actions to load default data to setup the app
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeMenu());
  }, []);

  return (
    <div className="flex overflow-x-hidden">
      <Menu />

      <Routes>
        <Route path="/" element={<Navigate replace to="/topic/latest" />} />
        <Route path="/topic/:topicId" element={<LeftSplitView />} />
      </Routes>
    </div>
  );
};

export default App;
