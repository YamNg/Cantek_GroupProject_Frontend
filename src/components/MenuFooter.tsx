import userLogo from "../assets/icon/user.svg";
import logoutLogo from "../assets/icon/logout.svg";

const MenuFooter = () => {
  return (
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
  );
};

export default MenuFooter;
