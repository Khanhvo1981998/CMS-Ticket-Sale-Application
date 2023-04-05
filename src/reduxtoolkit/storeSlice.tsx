import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contentSlice } from './ContentSlice';
import { filterSlice } from './FilterSlice';
import { modalSlice } from './ModalSlice';



const rootReducer = combineReducers({
  content: contentSlice.reducer,
  modal: modalSlice.reducer,
  filter:filterSlice.reducer
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,

});

export default store;
