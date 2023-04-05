import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import CapNhatVe from '../components/Modal/CapNhatThongTinVeModal/CapNhatVe';
import DanhSachGoiVe from '../pages/DanhSachGoiVePage/DanhSachGoiVe';
import DanhSachSuKien from '../pages/DanhSachSuKienPage/DanhSachSuKien';
import DoiSoatVePage from '../pages/DoiSoatVePage/DoiSoatVePage';
import HomeContent from '../pages/HomePage/HomeContent/HomeContent';
import QuanLyThietBi from '../pages/QuanLyThietBiPage/QuanLyThietBi';
import QuanLyVe from '../pages/QuanLyVePage/QuanLyVe';
import { RootState } from './storeSlice';

export interface ContentState {
  component: keyof typeof components;
  props: any;
}

const initialState: ContentState = {
  component: 'HomeContent',
  props: null,
};

const components = {
  HomeContent: HomeContent,
  QuanLyVe: QuanLyVe,
  DoiSoatVe: DoiSoatVePage,
  DanhSachSuKien:DanhSachSuKien,
  QuanLyThietBi:QuanLyThietBi,
  DanhSachGoiVe:DanhSachGoiVe,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    openContent: (state, action: PayloadAction<{ component: keyof typeof components, props: any }>) => {
      state.component = action.payload.component;
      state.props = action.payload.props;
    },
  },
});

export const { openContent } = contentSlice.actions;
export default contentSlice.reducer;
