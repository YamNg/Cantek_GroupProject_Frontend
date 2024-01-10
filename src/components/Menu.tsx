import { useSelector } from "react-redux";
import { IMenu } from "../models/component/menu.component.interface";
import MenuNav from "./MenuNav";
import MenuFooter from "./MenuFooter";
import MenuSectionList from "./MenuSectionList";
import MenuOverlay from "./MenuOverlay";

const Menu = () => {
  const menuState = useSelector(({ menu }: { menu: IMenu }) => {
    return menu;
  });

  return (
    <div
      className={`${
        menuState.isActive ? "flex" : "hidden"
      } fixed w-full h-full z-50 `}
    >
      <div className="h-full w-72 bg-gray-950/80 backdrop-blur">
        <MenuNav />
        <MenuSectionList />
        <MenuFooter />
      </div>

      <MenuOverlay />
    </div>
  );
};

export default Menu;
