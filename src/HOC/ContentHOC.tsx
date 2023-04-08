import React from 'react'
import { useSelector } from 'react-redux'
import DanhSachGoiVe from '../pages/DanhSachGoiVePage/DanhSachGoiVe';
import DanhSachSuKien from '../pages/DanhSachSuKienPage/DanhSachSuKien';
import DoiSoatVePage from '../pages/DoiSoatVePage/DoiSoatVePage';
import HomeContent from '../pages/HomePage/HomeContent/HomeContent';
import QuanLyThietBi from '../pages/QuanLyThietBiPage/QuanLyThietBi';
import QuanLyVe from '../pages/QuanLyVePage/QuanLyVe';
import { ContentState } from '../reduxtoolkit/ContentSlice';


type Props = {}

export interface RootState {
  content: ContentState;
}

const components = {
  HomeContent: HomeContent,
  QuanLyVe: QuanLyVe,
  DoiSoatVe: DoiSoatVePage,
  DanhSachSuKien:DanhSachSuKien,
  QuanLyThietBi:QuanLyThietBi,
  DanhSachGoiVe:DanhSachGoiVe,

} as const;

const ContentHOC = () => {
  const { component, props } = useSelector((state: RootState) => state.content);
  const ComponentToRender = components[component];

  return <ComponentToRender {...props} />;
};

export default ContentHOC;