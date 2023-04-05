import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import CapNhatVe from '../components/Modal/CapNhatThongTinVeModal/CapNhatVe';
import ChangeDate from '../components/Modal/DoiNgaySuDung/ChangeDate';
import LocVe from '../components/Modal/LocVeModal/LocVe';
import ThemGoiVe from '../components/Modal/ThemGoiVeModal/ThemGoiVe';
import { RootState } from './storeSlice';

export interface ModalState {
  component: keyof typeof components;
  props: any;
  isOpen:boolean
}

const initialState: ModalState = {
  component: 'CapNhatVe',
  props: null,
  isOpen:false
};

const components = {
  CapNhatVe: CapNhatVe,
  ThemGoiVe:ThemGoiVe,
  LocVe:LocVe,
  ChangeDate:ChangeDate
  // ...
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ component: keyof typeof components, props: any }>) => {
      console.log('Open modal with action:', action);
      state.component = action.payload.component;
      state.props = action.payload.props;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.component = "CapNhatVe";
      state.props = null;
      state.isOpen = false;
    },

  },
});



export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
