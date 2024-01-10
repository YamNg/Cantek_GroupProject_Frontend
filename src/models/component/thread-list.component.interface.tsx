import { IThreadListItem } from "../api/thread-list.api.interface";
import { ITopic } from "../api/topic.api.interface";

export interface IThreadList {
  selectedTopic: ITopic;
  threadList: IThreadListItem[];
}
