import { IComment } from "../api/comment.api.interface";

export interface IThreadDetailComponentState {
  _id: string;
  title: string;
  totalPage: number;
  pageSize: number;
  pages: IThreadDetailComponentPage[];
  isReachEnd: boolean;
}

export interface IThreadDetailComponentPage {
  pageNumber: number;
  comments: IComment[];
}