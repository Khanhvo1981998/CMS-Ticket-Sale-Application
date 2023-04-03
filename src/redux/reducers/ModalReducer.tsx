import { ReactElement } from "react";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  Component: <div>abc</div>,
  isOpen: false,
};

interface ActionType {
  type: string;
  payload?: any;
  Component?: React.ComponentType<any>;
}

export const ModalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const component = action.Component as ReactElement<any, any> | undefined;
      if (component) {
        return { ...state, Component: component, isOpen: true };
      }
      return state;
    }
    case CLOSE_MODAL: {
      return { ...state, isOpen: false };
    }
    default:
      return state;
  }
};