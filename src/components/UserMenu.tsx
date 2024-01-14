import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../config/store";
import { useState } from "react";
import { IUserForm } from "../models/component/userForm.component";
import { userLogin, loginFormNegateActive } from "../reducers/UserFormReducer";
import { showResponseMsg } from "../reducers/ResponseMsgReducer";

const UserMenu = () => {
  const [userCredentialData, setUserCredentialData] = useState({
    email: "",
    password: "",
  });
  const dispatch: AppDispatch = useDispatch();

  const userFormState = useSelector(({ userForm }: { userForm: IUserForm }) => {
    return userForm;
  });

  const handleEmailChange = (e: React.FormEvent) => {
    setUserCredentialData({
      ...userCredentialData,
      email: (e.target as HTMLInputElement).value,
    });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    setUserCredentialData({
      ...userCredentialData,
      password: (e.target as HTMLInputElement).value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      console.log(userFormState);
      e.preventDefault();
      if (userCredentialData.email && userCredentialData.password) {
        await dispatch(
          userLogin({
            email: userCredentialData.email,
            password: userCredentialData.password,
          })
        );
        dispatch(showResponseMsg({ isSuccess: true }));
      }
    } catch (err) {
      dispatch(
        showResponseMsg({ isSuccess: false, errorMessage: "LOGIN_FAILED" })
      );
    }
  };

  return (
    userFormState.isActive && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white z-40 rounded-lg p-4 shadow-lg max-w-md w-full mx-4 md:mx-0">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex justify-between pt-4">
              <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 w-full mr-2">
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
        <div
          className="h-full w-full fixed z-30"
          onClick={() => dispatch(loginFormNegateActive())}
        ></div>
      </div>
    )
  );
};

export default UserMenu;
