import { HomeOutlined, MailOutlined, SearchOutlined, SettingFilled, UnorderedListOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import logo from "../../assets/logo.png"

import { HiOutlineTicket } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./HomePage.css"
import { OPEN_CONTENT } from '../../redux/reducers/ContentReducer';
import HomeContent from './HomeContent/HomeContent';
import ContentHOC from '../../HOC/ContentHOC';
import QuanLyVe from '../QuanLyVePage/QuanLyVe';
import DoiSoatVePage from '../DoiSoatVePage/DoiSoatVePage';
import Login from '../Login/Login';
type Props = {}

export default function HomePage({ }: Props) {
    const dispatch = useDispatch()
    return (
        <div className="wrapper-home">
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

                                    <li className="rounded nav-item active">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault()
                                                const action = {
                                                    type: OPEN_CONTENT,
                                                    Component: <HomeContent />
                                                }
                                                dispatch(action)
                                            }}
                                            className='flex my-2 ml-1 mr-20 logo-item' href=""><HomeOutlined className='icon' />Trang chủ</a>
                                    </li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                Component: <QuanLyVe />
                                            }
                                            dispatch(action)

                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><HiOutlineTicket className='icon' /> Quản lý vé</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                Component: <DoiSoatVePage />
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><TbFileInvoice className='icon' />Đối soát vé</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                // Component: <DoiSoatVe />
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""> 
                                        <UnorderedListOutlined className='icon' />Danh sách sự kiện</a>
                                        </li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                // Component: Component
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><FiMonitor className='icon' />Quả lý thiết bị</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                // Component: Component
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href="">
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
    )
}