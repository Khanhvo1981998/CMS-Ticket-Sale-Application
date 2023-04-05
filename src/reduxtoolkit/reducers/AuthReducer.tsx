import { ReactElement } from "react";
import HomeContent from "../../pages/HomePage/HomeContent/HomeContent";
import { USER_INFO } from "../../services/LocalService";

const DANG_NHAP = "DANG_NHAP"

let user = {}
// if (localStorage.getItem(USER_INFO)) {
//     user = JSON.parse(localStorage.getItem(USER_INFO))
// }
const stateDefault = {
  userLogin:user
}
interface ActionType {
    type: string;
    payload?: any;
    Component?: React.ComponentType<any>;
  }

export const AuthReducer = (state = stateDefault, action:ActionType) => {

    switch (action.type) {
        case DANG_NHAP: {
            const component = action.Component as ReactElement<any, any> | undefined;
            if (component) {
                state.userLogin = component;
              }
            return { ...state }
        }

        default: return { ...state }
    }
}