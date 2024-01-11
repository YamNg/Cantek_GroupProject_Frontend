import thumbUpLogo from "../assets/icon/thumb-up.svg";
import thumbDownLogo from "../assets/icon/thumb-down.svg";
import replyLogo from "../assets/icon/reply.svg";
import dialogLogo from "../assets/icon/dialog.svg";

const ThreadDetailViewCommentList = () => {
  return (
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
                  Dolores natus aut veniam unde recusandae? Doloremque maxime
                  aperiam, libero quos voluptates itaque modi atque illum.
                  Aliquam debitis a voluptate voluptates magnam.
                </p>
              </blockquote>

              <p className="ml-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                natus aut veniam unde recusandae? Doloremque maxime aperiam,
                libero quos voluptates itaque modi atque illum. Aliquam debitis
                a voluptate voluptates magnam.
              </p>
            </blockquote>

            <p className="ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              natus aut veniam unde recusandae? Doloremque maxime aperiam,
              libero quos voluptates itaque modi atque illum. Aliquam debitis a
              voluptate voluptates magnam.
            </p>
          </blockquote>
        </div>

        {/* Comment Content */}
        <span className="max-h-24 overflow-hidden break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non
          illum? Nesciunt sint consequuntur blanditiis, mollitia adipisci
          corrupti! Esse sed quidem adipisci unde deserunt natus reprehenderit
          fuga assumenda accusantium cumque!
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
  );
};

export default ThreadDetailViewCommentList;
