import axios from "axios";
import { IApiResponse } from "../models/api/api-response.api.interface";
import { IThreadListApiResponse } from "../models/api/thread-list.api.interface";

const baseUrl = "http://localhost:3000/forum";
const threadUrl = `${baseUrl}/thread`;

const getLatestThreads = async ({
  lastThreadId,
}: {
  lastThreadId?: string;
}) => {
  let requestUrl = `${threadUrl}/all`;
  if (lastThreadId) requestUrl = `${requestUrl}?lastId=${lastThreadId}`;
  const { data }: { data: IApiResponse<IThreadListApiResponse> } =
    await axios.get(requestUrl);
  return data.body;
};

const getThreadsByTopic = async ({
  topicId,
  lastThreadId,
}: {
  topicId?: string;
  lastThreadId?: string;
}) => {
  let requestUrl = `${threadUrl}/all`;
  if (topicId) requestUrl = `${requestUrl}/topic/${topicId}`;
  if (lastThreadId) requestUrl = `${requestUrl}?lastId=${lastThreadId}`;

  const { data }: { data: IApiResponse<IThreadListApiResponse> } =
    await axios.get(requestUrl);
  return data.body;
};

export default { getThreadsByTopic, getLatestThreads };
