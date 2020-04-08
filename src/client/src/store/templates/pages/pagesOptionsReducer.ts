import WizardContentActionType from "../templatesActionType";
import { IOption } from "../../../types/option";
import { IResetPagesAction } from "../../selection/pages/model";
import { TEMPLATES_TYPEKEYS } from "../../typeKeys";

const pageOptions = (
  state: IOption[] = [],
  action: WizardContentActionType | IResetPagesAction
) => {
  switch (action.type) {
    case TEMPLATES_TYPEKEYS.SET_PAGES_OPTIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default pageOptions;