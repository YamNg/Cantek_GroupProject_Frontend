import axios from "axios";
import { IApiResponse } from "../models/api/api-response.api.interface";
import { IComment } from "../models/api/comment.api.interface";

const baseUrl = import.meta.env.VITE_FORUM_BASE_URL;
const commentUrl = `${baseUrl}/comment`;

const getCommentInBatch = async ({ commentIds }: { commentIds?: string[] }) => {
  const requestUrl = `${commentUrl}/batch`;

  if (commentIds && commentIds.length > 0) {
    const { data }: { data: IApiResponse<IComment> } = await axios.post(
      requestUrl,
      {
        commentIds,
      }
    );
    return data.body;
  } else {
    return [];
  }
};

export default { getCommentInBatch };
