import { HomeOutlined, MailOutlined, SearchOutlined, SettingFilled, UnorderedListOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import logo from "../../assets/logo.png"
import { HiOutlineTicket } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./HomePage.css"
import ContentHOC from '../../HOC/ContentHOC';
import Login from '../Login/Login';
import { useEffect, useState } from 'react';
import { openContent } from '../../reduxtoolkit/ContentSlice';
import { DanhSachGoiVe, DanhSachSuKien, DoiSoatVe, HomeContent, QuanLyThietBi, QuanLyVe } from '../../types/PageType';



type Props = {}

interface User {
    stt: number;
    bookingCode: string;
    ticketNumber: number;
    eventName: string;
    ticketCombo: string;
    ticketPrice: string;
    ticketName: string;
    ticketType: string;
    status: string;
    dateUsed: string;
    ticketDate: string;
    checkin: string;
    checked: boolean;
  }

export default function HomePage({ }: Props) {

    const [activeItem, setActiveItem] = useState('Home');
const dispatch = useDispatch()
    
    return (
        <div className='wrapper-homepage'>
            <div className=" wrapper-home">
                <div className="flex ">
                    <div className="w-1/5 wrapper-menu">
                        <div className="menu">
                            <div className="menu-logo">
                                <div className="insight-logo">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="nav-menu">
                                <div className="nav-list">
                                    <ul>

                                        <li

                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveItem('Home');
                                                dispatch(openContent({ component: HomeContent, props: null }));
                                            }}
                                            style={{ borderRadius: 8, cursor: "pointer", }}
                                            className={`nav-item ${activeItem === 'Home' ? 'active' : ''}`}
                                      
                                            >
                                            <a className='flex my-2 ml-1 mr-20 logo-item' href=""><HomeOutlined className='icon' />Trang chủ</a>
                                        </li>
                                        <li
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveItem('QuanLyVe');
                                                dispatch(openContent({ component: QuanLyVe, props: null }));
                                            }}
                                            style={{ borderRadius: 8, cursor: "pointer", }}
                                            className={`nav-item ${activeItem === 'QuanLyVe' ? 'active' : ''}`}><a className='flex my-2 ml-1 mr-20 logo-item' href=""><HiOutlineTicket className='icon' /> Quản lý vé</a></li>
                                        <li

                                            onClick={(e) => {
                                            e.preventDefault()
                                                setActiveItem('DoiSoatVe');
                                             
                                                dispatch(openContent({ component: DoiSoatVe, props: null }));
                                            }}
                                            style={{ borderRadius: 8, cursor: "pointer", }}
                                            className={`nav-item ${activeItem === 'DoiSoatVe' ? 'active' : ''}`}><a className='flex my-2 ml-1 mr-20 logo-item' href=""><TbFileInvoice className='icon' />Đối soát vé</a></li>
                                        <li
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveItem('DanhSachSuKien');
                                                dispatch(openContent({ component: DanhSachSuKien, props: null }));
                                            }}
                                            style={{ borderRadius: 8, cursor: "pointer", }}
                                            className={`nav-item ${activeItem === 'DanhSachSuKien' ? 'active' : ''}`}>
                                            <a className='flex my-2 ml-1 mr-20 logo-item' href="">
                                                <UnorderedListOutlined className='icon' />Danh sách sự kiện</a>
                                        </li>
                                        <li

                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveItem('QuanLyThietBi');
                                                dispatch(openContent({ component: QuanLyThietBi, props: null }));
                                            }}
                                            style={{ borderRadius: 8, cursor: "pointer", }}
                                            className={`nav-item ${activeItem === 'QuanLyThietBi' ? 'active' : ''}`}>
                                            <a className='flex my-2 ml-1 mr-20 logo-item' href=""><FiMonitor className='icon' />Quản lý thiết bị</a></li>
                                        <li
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveItem('CaiDat');
                                                dispatch(openContent({ component: DanhSachGoiVe, props: null }));
                                            }}
                                            style={{ borderRadius: 8, cursor: "pointer", }}
                                            className={`nav-item ${activeItem === 'CaiDat' ? 'active' : ''}`}>
                                            <a className='flex my-2 ml-1 mr-20 logo-item' href="">
                                                <SettingFilled className='icon' />Cài đặt</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-4/5 wrapper-chart">
                        <div className="chart-header">
                            <div className='flex justify-between mt-2 search-home'>
                                <div>
                                    <input className='' type="search" placeholder=' Search' />
                                    <SearchOutlined className='search-icon' />

                                </div>
                                <div className='flex items-center gap-4 text-3xl'>
                                    <MailOutlined />
                                    <IoMdNotificationsOutline />

                                    <Login />
                                </div>

                            </div>
                            <div className='content'>
                                <ContentHOC />
                            </div>
                        </div>
                        <div className="chart-footer">

                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}