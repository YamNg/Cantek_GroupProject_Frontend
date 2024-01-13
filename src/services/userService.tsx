import axios from "axios";
import { IApiResponse } from "../models/api/api-response.api.interface";
import { IThreadListApiResponse } from "../models/api/thread-list.api.interface";

const baseUrl = import.meta.env.VITE_USER_BASE_URL;

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const requestUrl = `${baseUrl}/login`;

  const { data }: { data: IApiResponse<IThreadListApiResponse> } =
    await axios.post(
      requestUrl,
      { email, password },
      { withCredentials: true }
    );
  return data.body;
};

export default { login };
