import { ISection } from "../api/section.api.interface";
import { IPopupState } from "./popup.common.interface";

export interface IMenu extends IPopupState {
  sections: ISection[];
}
