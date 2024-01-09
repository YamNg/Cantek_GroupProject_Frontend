import "./App.css";
import arrowLeftLogo from "./assets/icon/arrow-left.svg";
import hamburgerLogo from "./assets/icon/hamburger.svg";
import refreshLogo from "./assets/icon/refresh.svg";
import addPostLogo from "./assets/icon/add-post.svg";
import thumbUpLogo from "./assets/icon/thumb-up.svg";
import thumbDownLogo from "./assets/icon/thumb-down.svg";

function App() {
  return (
    <div className="flex">
      <div className="fixed w-full h-full z-20">
        <div className="h-full w-72 bg-black/80 backdrop-blur">123</div>
      </div>

      <div className="w-full pt-10 pb-10">
        <div className="top-0 h-10 w-full fixed bg-white text-white z-10">
          <div className="bg-gray-900/95">
            <div className="flex items-center h-10">
              <h1 className="grow text-center text-ellipsis overflow-hidden whitespace-nowrap">
                Hobbies
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-[calc(100vh-5rem)] ">
          <div className="relative px-6 py-3 border-b-2 border-black-500">
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600">User Name</span>
              <span className="text-xs">1 day ago</span>
              <span className="flex items-center">
                <img
                  src={thumbUpLogo}
                  className="h-4 w-4"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
                <span className="text-xs">123</span>
              </span>
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            </span>
            <a
              href="#1"
              className="absolute top-0 left-0 w-full h-full hover:bg-blue-900/10"
            ></a>
          </div>

          <div className="relative px-6 py-3 border-b-2 border-black-500">
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600">User Name</span>
              <span className="text-xs">1 day ago</span>
              <span className="flex items-center">
                <img
                  src={thumbDownLogo}
                  className="h-4 w-4"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
                <span className="text-xs">123</span>
              </span>
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              eius soluta, ad assumenda saepe id architecto sed, praesentium
              tempore mollitia rem quisquam totam, distinctio nobis aliquid
              omnis porro quis? Reprehenderit.
            </span>
            <a
              href="#2"
              className="absolute top-0 left-0 w-full h-full hover:bg-blue-900/10"
            ></a>
          </div>

          <div className="relative px-6 py-3 border-b-2 border-black-500">
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600">User Name</span>
              <span className="text-xs">1 day ago</span>
              <span className="flex items-center">
                <img
                  src={thumbDownLogo}
                  className="h-4 w-4"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
                <span className="text-xs">123</span>
              </span>
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              eius soluta, ad assumenda saepe id architecto sed, praesentium
              tempore mollitia rem quisquam totam, distinctio nobis aliquid
              omnis porro quis? Reprehenderit.
            </span>
            <a
              href="#3"
              className="absolute top-0 left-0 w-full h-full hover:bg-blue-900/10"
            ></a>
          </div>

          <div className="relative px-6 py-3 border-b-2 border-black-500">
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600">User Name</span>
              <span className="text-xs">1 day ago</span>
              <span className="flex items-center">
                <img
                  src={thumbDownLogo}
                  className="h-4 w-4"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
                <span className="text-xs">123</span>
              </span>
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              eius soluta, ad assumenda saepe id architecto sed, praesentium
              tempore mollitia rem quisquam totam, distinctio nobis aliquid
              omnis porro quis? Reprehenderit.
            </span>
            <a
              href="#4"
              className="absolute top-0 left-0 w-full h-full hover:bg-blue-900/10"
            ></a>
          </div>

          <div className="relative px-6 py-3 border-b-2 border-black-500">
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600">User Name</span>
              <span className="text-xs">1 day ago</span>
              <span className="flex items-center">
                <img
                  src={thumbDownLogo}
                  className="h-4 w-4"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
                <span className="text-xs">123</span>
              </span>
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              eius soluta, ad assumenda saepe id architecto sed, praesentium
              tempore mollitia rem quisquam totam, distinctio nobis aliquid
              omnis porro quis? Reprehenderit.
            </span>
            <a
              href="#5"
              className="absolute top-0 left-0 w-full h-full hover:bg-blue-900/10"
            ></a>
          </div>
        </div>

        <div className="flex fixed h-10 w-full bottom-0 bg-gray-950 md:hidden">
          <span className="grow flex items-center justify-center cursor-pointer hover:bg-gray-800">
            <img
              src={hamburgerLogo}
              className="h-8 w-8"
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
    </div>
  );
}

export default App;
