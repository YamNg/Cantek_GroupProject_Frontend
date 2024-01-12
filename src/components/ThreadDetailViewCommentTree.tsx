import { IComment } from "../models/api/comment.api.interface";

const ThreadDetailViewCommentTree = ({ data }: { data: IComment }) => {
  return <>{data._id}</>;
};

export default ThreadDetailViewCommentTree;
