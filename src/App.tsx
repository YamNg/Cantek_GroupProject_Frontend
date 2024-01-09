import "./App.css";
import arrowLeftLogo from "./assets/icon/arrow-left.svg";
import hamburgerLogo from "./assets/icon/hamburger.svg";
import refreshLogo from "./assets/icon/refresh.svg";
import addPostLogo from "./assets/icon/add-post.svg";
import thumbUpLogo from "./assets/icon/thumb-up.svg";
import thumbDownLogo from "./assets/icon/thumb-down.svg";
import beerCanLogo from "./assets/icon/can-of-beer.svg";
import userLogo from "./assets/icon/user.svg";
import logoutLogo from "./assets/icon/logout.svg";
import replyLogo from "./assets/icon/reply.svg";
import replyWriteLogo from "./assets/icon/reply-white.svg";
import thumbUpWhiteLogo from "./assets/icon/thumb-up-white.svg";
import thumbDownWhiteLogo from "./assets/icon/thumb-down-white.svg";
import dialogLogo from "./assets/icon/dialog.svg";

function App() {
  return (
    <div className="flex overflow-x-hidden">
      {/* left hamburger menu interchange flex <--> hidden to show/hide*/}
      <div className="hidden fixed w-full h-full z-20">
        <div className="relative h-full w-72 bg-gray-950/80 backdrop-blur overflow-y-scroll">
          <div className="sticky top-0 bg-gray-950">
            <div className="flex items-center justify-center p-3">
              <img src={beerCanLogo} className="h-12 w-12" alt="arrow" />
            </div>
          </div>

          <div className="grid grid-cols-2 p-4 text-white">
            <div className="text-sm col-span-2 text-stone-400 pb-2">Hobby</div>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Anime
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Game
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Movie
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Music
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Toys
            </a>
          </div>
          <div className="grid grid-cols-2 p-4 text-white">
            <div className="text-sm col-span-2 text-stone-400 pb-2">Hobby2</div>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Anime
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Game
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Movie
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Music
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Toys
            </a>
          </div>
          <div className="grid grid-cols-2 p-4 text-white">
            <div className="text-sm col-span-2 text-stone-400 pb-2">Hobby3</div>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Anime
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Game
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Movie
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Music
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Toys
            </a>
          </div>
          <div className="grid grid-cols-2 p-4 text-white">
            <div className="text-sm col-span-2 text-stone-400 pb-2">Hobby4</div>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Anime
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Game
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Movie
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Music
            </a>
            <a href="#link1" className="text-lg pl-2 pb-2">
              Toys
            </a>
          </div>
          <div className="sticky bottom-0 bg-gray-950">
            <div className="flex content-center p-2">
              <span className="flex items-center justify-center cursor-pointer grow">
                <img src={userLogo} className="h-8 w-8" alt="arrow" />
              </span>
              <span className="flex items-center justify-center cursor-pointer grow">
                <img src={logoutLogo} className="h-8 w-8" alt="arrow" />
              </span>
            </div>
          </div>
        </div>

        <div className="grow bg-gray-950/50"></div>
      </div>

      {/* left split view add hidden to hide */}
      <div className="h-screen min-w-full md:min-w-[30%] md:w-1/2 lg:w-1/3 overflow-y-scroll">
        {/* title */}
        <div className="top-0 h-10 w-full fixed bg-white text-white z-10 md:w-1/2 lg:w-1/3">
          <div className="flex bg-gray-900/95 items-center">
            <span className="p-2 cursor-pointer hover:bg-gray-700 hidden md:block">
              <div className="flex">
                <img
                  src={hamburgerLogo}
                  className="h-8 w-8"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />

                <img
                  src={beerCanLogo}
                  className="h-8 w-8"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </span>
            <div className="flex items-center p-2 h-10 grow">
              <h1 className="w-10 grow text-center text-ellipsis overflow-hidden whitespace-nowrap">
                Anime
              </h1>
            </div>
            <span className="p-2 cursor-pointer hover:bg-gray-700 hidden md:block">
              <div className="flex">
                <img
                  src={refreshLogo}
                  className="h-7 w-7"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </span>

            <span className="p-2 cursor-pointer hover:bg-gray-700 hidden md:block">
              <div className="flex">
                <img
                  src={addPostLogo}
                  className="h-7 w-7"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </span>
          </div>
        </div>

        {/* post list */}
        <div className="flex flex-col mt-10 mb-10 md:mb-0 w-full">
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

      {/* right split view */}
      <div className="flex flex-col h-screen overflow-y-scroll md:border-solid md:border-l md:border-gray min-w-full md:min-w-[30%] md:w-1/2 lg:w-2/3">
        {/* title */}
        <div className="top-0 h-10 z-20 w-full fixed bg-white text-white z-0 md:w-1/2 lg:w-2/3">
          <div className="flex bg-gray-900/95 items-center">
            <span className="p-2 cursor-pointer hover:bg-gray-700 hidden md:block">
              <div className="flex">
                <img
                  src={arrowLeftLogo}
                  className="h-8 w-8"
                  alt="arrow"
                  width="40px"
                  height="40px"
                />
              </div>
            </span>
            <div className="flex items-center p-2 h-10 grow">
              <h1 className="w-10 grow text-left text-ellipsis overflow-hidden whitespace-nowrap">
                Demon Slayer is Good !!!
              </h1>
            </div>

            <div className="flex gap-2 mr-3 items-center">
              <div className="flex flex-col items-center cursor-pointer hover:bg-gray-700">
                <span className="p-2">
                  <div className="flex">
                    <img
                      src={replyWriteLogo}
                      className="h-5 w-5"
                      alt="arrow"
                      width="40px"
                      height="40px"
                    />
                  </div>
                </span>
              </div>

              <div className="flex flex-col items-center cursor-pointer hover:bg-gray-700">
                <span className="p-2">
                  <div className="flex">
                    <img
                      src={thumbUpWhiteLogo}
                      className="h-4 w-4"
                      alt="arrow"
                    />
                  </div>
                </span>
                <span className="text-xs">123</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:bg-gray-700">
                <span className="p-2">
                  <div className="flex">
                    <img
                      src={thumbDownWhiteLogo}
                      className="h-4 w-4"
                      alt="arrow"
                    />
                  </div>
                </span>
                <span className="text-xs">456</span>
              </div>
            </div>
          </div>
        </div>

        {/* comment list */}
        <div className="flex flex-col mt-10 mb-10 md:mb-0">
          <div className="relative px-6 py-3 border-b-2 border-black-500">
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600 cursor-pointer hover:underline">
                User Name
              </span>
              <span className="text-xs">1 day ago</span>
              <img
                src={replyLogo}
                className="h-4 w-4 ml-auto cursor-pointer hover:invert-[.5]"
                alt="arrow"
                width="40px"
                height="40px"
              />
            </div>
            <span className="max-h-24 overflow-hidden break-words">
              LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            </span>
            <div className="flex gap-2">
              <div className="flex w-max mt-3 p-2 gap-3 border border-black border-solid rounded">
                <div className="flex gap-1 items-center">
                  <img
                    src={thumbUpLogo}
                    className="h-3 w-3 cursor-pointer hover:invert-[.5]"
                    alt="arrow"
                  />
                  <span className="text-xs">123123123</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    src={thumbDownLogo}
                    className="h-3 w-3 cursor-pointer hover:invert-[.5]"
                    alt="arrow"
                  />
                  <span className="text-xs">123</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-6 py-3 border-b-2 border-black-500">
            {/* Comment Metadata */}
            <div className="pb-1 flex gap-2 items-center">
              <span className="text-blue-600 cursor-pointer hover:underline">
                User Name
              </span>
              <span className="text-xs">1 day ago</span>
              <img
                src={replyLogo}
                className="h-4 w-4 ml-auto cursor-pointer hover:invert-[.5]"
                alt="arrow"
                width="40px"
                height="40px"
              />
            </div>

            {/* Comment Parents */}
            <div className="mb-2">
              <blockquote className="relative">
                <div className="absolute bg-gray-800 hover:bg-gray-400 h-full w-[2px] cursor-pointer"></div>
                <p className="ml-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores natus aut veniam unde recusandae? Doloremque maxime
                  aperiam, libero quos voluptates itaque modi atque illum.
                  Aliquam debitis a voluptate voluptates magnam.
                </p>
              </blockquote>
            </div>

            {/* Comment Content */}
            <span className="max-h-24 overflow-hidden break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              non illum? Nesciunt sint consequuntur blanditiis, mollitia
              adipisci corrupti! Esse sed quidem adipisci unde deserunt natus
              reprehenderit fuga assumenda accusantium cumque!
            </span>

            {/* Comment Up/down vote, children comments button */}
            <div className="flex gap-2">
              <div className="flex w-max mt-3 p-2 gap-3 border border-black border-solid rounded">
                <div className="flex gap-1 items-center">
                  <img
                    src={thumbUpLogo}
                    className="h-3 w-3 cursor-pointer hover:invert-[.5]"
                    alt="arrow"
                  />
                  <span className="text-xs">123123123</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    src={thumbDownLogo}
                    className="h-3 w-3 cursor-pointer hover:invert-[.5]"
                    alt="arrow"
                  />
                  <span className="text-xs">123</span>
                </div>
              </div>
              <div className="flex w-max mt-3 p-2 gap-3 border border-black border-solid rounded">
                <div className="flex gap-1 items-center">
                  <img
                    src={dialogLogo}
                    className="h-4 w-4 cursor-pointer hover:invert-[.5]"
                    alt="arrow"
                  />
                  <span className="text-xs">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
