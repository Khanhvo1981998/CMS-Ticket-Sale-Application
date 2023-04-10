import { combineReducers, configureStore, getDefaultMiddleware, ThunkDispatch } from '@reduxjs/toolkit';
import { contentSlice } from './ContentSlice';
import { filterSlice } from './FilterSlice';
import { modalSlice } from './ModalSlice';
import { Action } from 'redux';
import { ticketsSlice } from './TicketSlice';
import thunk, { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { ticketPackageSlice } from './TicketPackageSlice';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;
export const useThunkDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const rootReducer = combineReducers({
  content: contentSlice.reducer,
  modal: modalSlice.reducer,
  filter:filterSlice.reducer,
  ticket: ticketsSlice.reducer,
  ticketPackage: ticketPackageSlice.reducer,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
