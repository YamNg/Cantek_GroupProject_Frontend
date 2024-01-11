import Menu from "./components/Menu";
import { Routes } from "react-router";
import { Navigate, Route } from "react-router-dom";
import ForumMainPage from "./pages/ForumMainPage";

const App = () => {
  return (
    <div className="flex overflow-x-hidden">
      <Menu />

      <Routes>
        <Route path="/" element={<Navigate replace to="/topic/latest" />} />
        <Route path="/topic/:topicId" element={<ForumMainPage />} />
        <Route
          path="/topic/:topicId/thread/:thread"
          element={<ForumMainPage />}
        />
        <Route
          path="/topic/:topicId/thread/:thread/page/:pageNumber"
          element={<ForumMainPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
