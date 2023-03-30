import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";
import { ContentReducer } from "./reducers/ContentReducer";




const rootReducer = combineReducers({
    //reducer con khai báo tại đây
    applyMiddleware,
    ContentReducer,



})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.()
));

export default store;