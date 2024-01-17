import axios from "axios";
import { IApiResponse } from "../models/api/api-response.api.interface";
import { IUser } from "../models/api/user.api.interface";

const baseUrl = import.meta.env.VITE_USER_BASE_URL;
const currentFrontendUrl = import.meta.env.VITE_CURRENT_FRONTEND_URL;

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // for solving the issue which using public solution (e.g. Render) to host the application
  // which Cookie cannot set to the public recognized domain
  // Current solution is to define a Rewrite rule in Render, to simulate requesting login api with same domain
  // and bypass the error for setting the cookies for login tokens
  let requestUrl = currentFrontendUrl ? currentFrontendUrl + "/user" : baseUrl;
  requestUrl = `${requestUrl}/login`;

  const { data }: { data: IApiResponse<IUser> } = await axios.post(
    requestUrl,
    { email, password },
    { withCredentials: true }
  );
  return data.body;
};

const logout = async ({ userId }: { userId: string }) => {
  // for solving the issue which using public solution (e.g. Render) to host the application
  // which Cookie cannot set to the public recognized domain
  // Current solution is to define a Rewrite rule in Render, to simulate requesting login api with same domain
  // and bypass the error for setting the cookies for login tokens
  let requestUrl = currentFrontendUrl ? currentFrontendUrl + "/user" : baseUrl;
  requestUrl = `${requestUrl}/logout`;

  const { data }: { data: IApiResponse<IUser> } = await axios.post(
    requestUrl,
    { userId },
    { withCredentials: true }
  );

  return data.body;
};

const verifyCookie = async () => {
  const requestUrl = `${baseUrl}/verify`;

  const { data }: { data: IApiResponse<IUser> } = await axios.get(requestUrl, {
    withCredentials: true,
  });

  return data.body;
};

const register = async ({
  username,
  email,
  password,
  reconfirmPassword,
}: {
  username: string;
  email: string;
  password: string;
  reconfirmPassword: string;
}) => {
  const requestUrl = `${baseUrl}/register`;

  const { data }: { data: IApiResponse<IUser> } = await axios.post(requestUrl, {
    username,
    email,
    password,
    reconfirmPassword,
  });

  return data.body;
};

export default { login, logout, verifyCookie, register };
