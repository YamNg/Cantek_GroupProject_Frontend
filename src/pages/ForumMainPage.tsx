import { useDispatch } from "react-redux";
import ThreadListView from "../components/ThreadListView";
import { useEffect } from "react";
import { initializeMenu } from "../reducers/menuReducer";
import { AppDispatch } from "../config/store";
import ThreadDetailView from "../components/ThreadDetailView";

const ForumMainPage = () => {
  // trigger actions to load default data to setup the app
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeMenu());
  }, [dispatch]);

  return (
    <>
      <ThreadListView />
      <ThreadDetailView />
    </>
  );
};

export default ForumMainPage;