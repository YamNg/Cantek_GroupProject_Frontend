import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMenu } from "../models/component/menu.component.interface";
import { ISection } from "../models/api/section.api.interface";
import { ITopic } from "../models/api/topic.api.interface";
import { IThreadList } from "../models/component/thread-list.component.interface";

const MenuSectionList = () => {
  const menuState = useSelector(({ menu }: { menu: IMenu }) => {
    return menu;
  });

  const threadListState = useSelector(
    ({ threadList }: { threadList: IThreadList }) => {
      return threadList;
    }
  );

  return (
    <div className="mt-16 h-[calc(100%-7rem)] overflow-y-scroll">
      <div className="grid grid-cols-2 p-4">
        <Link
          className={`text-lg pl-2 ${
            threadListState.selectedTopic?._id
              ? "text-white"
              : "text-amber-300 pointer-events-none"
          }`}
          to={`/topic/latest`}
        >
          Latest Threads
        </Link>
      </div>

      {menuState.sections ? (
        menuState.sections.map((section: ISection) => {
          return (
            <div key={section._id} className="grid grid-cols-2 p-4 text-white">
              <div className="text-sm col-span-2 text-stone-400 pb-2">
                {section.title}
              </div>
              {section.topics.map((topic: ITopic) => {
                return (
                  <Link
                    key={topic._id}
                    className={`text-lg pl-2 pb-2 ${
                      threadListState.selectedTopic?._id === topic._id
                        ? "text-amber-300 pointer-events-none"
                        : "text-white"
                    }`}
                    to={`/topic/${topic._id}`}
                  >
                    {topic.title}
                  </Link>
                );
              })}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuSectionList;
