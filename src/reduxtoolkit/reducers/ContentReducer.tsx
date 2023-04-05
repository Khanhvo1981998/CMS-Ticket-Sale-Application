import { ReactElement } from "react";
import HomeContent from "../../pages/HomePage/HomeContent/HomeContent";

export const OPEN_CONTENT = "OPEN_CONTENT"

const stateDefault = {
    // Component: <p> Nội dung mặc định</p>,
    Component: <HomeContent/>,

}
interface ActionType {
    type: string;
    payload?: any;
    Component?: React.ComponentType<any>;
  }

export const ContentReducer = (state = stateDefault, action:ActionType) => {

    switch (action.type) {
        case OPEN_CONTENT: {
            const component = action.Component as ReactElement<any, any> | undefined;
            if (component) {
                state.Component = component;
              }
            return { ...state }
        }

        default: return { ...state }
    }
}