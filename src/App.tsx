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

      {/* left split view */}
      <div className="relative h-screen overflow-y-scroll min-w-full md:w-full md:min-w-[30%] lg:w-1/2">
        {/* title */}
        <div className="top-0 h-10 w-full sticky bg-white text-white z-10">
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
              <h1 className="grow text-center text-ellipsis overflow-hidden whitespace-nowrap">
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
        <div className="flex flex-col">
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

        {/* footer for mobile view */}
        <div className="flex sticky h-10 w-full bottom-0 bg-gray-950 md:hidden">
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

      <div className="h-screen overflow-y-scroll">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum optio magni molestias? Hic facilis illo consequuntur aliquam
          harum molestiae voluptate, amet libero incidunt quibusdam, similique
          aut in recusandae culpa.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id fuga
          voluptas quaerat quis ipsam est dignissimos suscipit expedita ab,
          nostrum obcaecati hic dicta distinctio velit quisquam neque, labore
          veniam?
        </p>
      </div>
    </div>
  );
}

export default App;
