import { ISection } from "../api/section.api.interface";
import { IPopupState } from "./popup.common.interface";

export interface IMenuComponentState extends IPopupState {
  sections: ISection[];
}
