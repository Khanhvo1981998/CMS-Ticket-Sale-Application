import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";
import { ContentReducer } from "./reducers/ContentReducer";
import { ModalReducer } from "./reducers/ModalReducer";

export interface RootState {
    content: {
      Component: React.ReactNode
    }
  }

const rootReducer = combineReducers({
    //reducer con khai báo tại đây
    applyMiddleware,
    ContentReducer,
    ModalReducer,
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.()
));

export default store;