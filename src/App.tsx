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
import cheersLogo from "./assets/icon/beer-cheers.svg";
import errorLogo from "./assets/icon/error.svg";

function App() {
  return (
    <div className="flex overflow-x-hidden">
      {true && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="h-60 w-60 bg-white border-2 border-black backdrop-blur rounded-lg flex flex-col justify-center items-center p-2">
            <img src={cheersLogo} className="h-32 w-32" alt="arrow" />
            <div>Request Success</div>
            <div>Cheers!</div>
          </div>
        </div>
      )}

      {false && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="h-60 w-fit bg-white border-2 border-black backdrop-blur rounded-lg flex flex-col justify-center items-center p-2">
            <img src={errorLogo} className="h-32 w-32" alt="arrow" />
            <div>Request Failed</div>
            <div>INCORRECT_USER_EMAIL_OR_PASSWORD</div>
          </div>
        </div>
      )}

      {/* login form */}
      {false && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-md w-full mx-4 md:mx-0">
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex justify-between pt-4">
                <button
                  type="button" // Change to "button" if this doesn't submit the form
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 w-full mr-2"
                >
                  Register
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 w-full ml-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* user login menu */}

      {/* left hamburger menu interchange flex <--> hidden to show/hide*/}
      <div className="hidden fixed w-full h-full z-50">
        <div className="h-full w-72 bg-gray-950/80 backdrop-blur">
          <div className="fixed w-full h-15 top-0 bg-gray-950">
            <div className="flex items-center justify-center p-3">
              <img src={beerCanLogo} className="h-12 w-12" alt="arrow" />
            </div>
          </div>
          <div className="mt-16 h-[calc(100%-7rem)] overflow-y-scroll">
            <div className="grid grid-cols-2 p-4 text-white">
              <div className="text-sm col-span-2 text-stone-400 pb-2">
                Hobby
              </div>
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
              <div className="text-sm col-span-2 text-stone-400 pb-2">
                Hobby2
              </div>
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
              <div className="text-sm col-span-2 text-stone-400 pb-2">
                Hobby2
              </div>
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
              <div className="text-sm col-span-2 text-stone-400 pb-2">
                Hobby2
              </div>
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
          </div>

          <div className="fixed h-12 w-full bottom-0">
            <div className="flex content-center h-12 bg-gray-950">
              <span className="flex items-center justify-center cursor-pointer grow hover:bg-gray-800">
                <img src={userLogo} className="h-8 w-8" alt="arrow" />
              </span>
              <span className="flex items-center justify-center cursor-pointer grow hover:bg-gray-800">
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
          {/* comment 1 */}
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

          {/* comment 2 */}
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

            {/* Comment that have ancestors */}
            <div className="my-2">
              <blockquote className="relative">
                <div className="absolute h-full w-[5px] cursor-pointer group">
                  <div className="bg-gray-800 group-hover:bg-gray-400 w-[2px] h-full"></div>
                </div>

                {/* Comment father */}
                <blockquote className="relative ml-3 mb-2">
                  <div className="absolute h-full w-[5px] cursor-pointer group">
                    <div className="bg-gray-800 group-hover:bg-gray-400 w-[2px] h-full"></div>
                  </div>

                  {/* Comment grandfather */}
                  <blockquote className="relative ml-3 mb-2">
                    <div className="absolute h-full w-[5px] cursor-pointer group">
                      <div className="bg-gray-800 group-hover:bg-gray-400 w-[2px] h-full"></div>
                    </div>

                    {/* Show load more button when reach 3 levels */}
                    <blockquote className="relative ml-3 mb-2">
                      <div className="absolute h-full w-[5px] group">
                        <div className="bg-gray-800 w-[2px] h-full"></div>
                      </div>
                      <div className="h-8">
                        <span className="ml-3 cursor-pointer border border-black border-solid rounded text-xs p-1 hover:bg-gray-300">
                          Load More
                        </span>
                      </div>
                    </blockquote>

                    <p className="ml-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores natus aut veniam unde recusandae? Doloremque
                      maxime aperiam, libero quos voluptates itaque modi atque
                      illum. Aliquam debitis a voluptate voluptates magnam.
                    </p>
                  </blockquote>

                  <p className="ml-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores natus aut veniam unde recusandae? Doloremque maxime
                    aperiam, libero quos voluptates itaque modi atque illum.
                    Aliquam debitis a voluptate voluptates magnam.
                  </p>
                </blockquote>

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

          {/* comment 3 */}
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
        </div>
      </div>
    </div>
  );
}

export default App;
