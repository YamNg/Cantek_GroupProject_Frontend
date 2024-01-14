import userLogo from "../assets/icon/user.svg";
import logoutLogo from "../assets/icon/logout.svg";
import { AppDispatch } from "../config/store";
import { useDispatch, useSelector } from "react-redux";
import { IUserForm } from "../models/component/userForm.component";
import { initializeLoginForm, userLogout } from "../reducers/UserFormReducer";

const MenuFooter = () => {
  const dispatch: AppDispatch = useDispatch();
  const userFormState = useSelector((userForm: IUserForm) => {
    return userForm;
  });

  return (
    <div className="fixed h-12 w-full bottom-0">
      <div className="flex content-center h-12 bg-gray-950">
        <span
          className="flex items-center justify-center cursor-pointer grow hover:bg-gray-800"
          onClick={() => {
            if (!userFormState.isLogin) dispatch(initializeLoginForm());
          }}
        >
          <img src={userLogo} className="h-8 w-8" alt="arrow" />
        </span>
        <span
          className="flex items-center justify-center cursor-pointer grow hover:bg-gray-800"
          onClick={() => dispatch(userLogout({ userId: userFormState.userId }))}
        >
          <img src={logoutLogo} className="h-8 w-8" alt="arrow" />
        </span>
      </div>
    </div>
  );
};

export default MenuFooter;
