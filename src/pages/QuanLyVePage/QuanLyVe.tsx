import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import { HiEllipsisVertical } from "react-icons/hi2";
import React, { useRef, useState } from 'react'
import { CSVLink } from 'react-csv'
import { data } from '../../data'
import "./QuanLyVe.css"
import ModalHOC from '../../HOC/ModalHOC';
import { OPEN_MODAL } from '../../redux/reducers/ModalReducer';
import LocVe from '../../components/Modal/LocVeModal/LocVe';
import { useDispatch } from 'react-redux';
import ChangeDate from '../../components/Modal/DoiNgaySuDung/ChangeDate';
 
interface Props {
   
  }

export default function QuanLyVe({ }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const dispatch = useDispatch()
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const [selectedItem, setSelectedItem] = useState<{
        stt: number | null;
        bookingCode: string;
        ticketNumber: number | null;
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
      }>();
      
    const renderDanhSachVe = () => {
        const items = data.slice((currentPage - 1) * 7, currentPage * 7).filter((item) =>
            item.ticketNumber.toString().includes(searchValue)
        );
        return items.map((item, index) => {
            return (
                <>
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap ">
                            {item.stt}
                        </td>
                        <td className="py-3 ">
                            {item.bookingCode}
                        </td>
                        <td className="py-3 ">
                            {item.ticketNumber}
                        </td>
                        <td className="py-3 ">
                            {item.eventName}
                        </td>
                        <td className="py-3 ">

                            {(item.status === "Đã sử dụng") ? <span className='flex p-2 mx-4 rounded ticket-used'> <div className='w-3 h-3 mt-1 mr-1 rounded-full bg-slate-500'></div> Đã sử dụng</span> : (item.status === "Chưa sử dụng") ? <span className='flex p-2 mx-4 rounded ticket-unused '><div className='w-3 h-3 mt-1 mr-1 rounded-full bg-lime-500'></div>Chưa sử dụng</span> : (item.status === "Hết hạn") ? <span className='flex p-2 mx-4 rounded ticket-expired'><div className='w-3 h-3 mt-1 mr-1 bg-red-500 rounded-full'></div>Hết hạn</span> : ""}

                        </td>
                        <td className="px-3 py-3">
                            {item.dateUsed}
                        </td>
                        <td className="px-4 py-3 ">
                            {item.ticketDate}
                        </td>
                        <td className="px-4 py-3 ">
                            {item.checkin}
                        </td>
                        <td
                         onClick={() => {
                            setSelectedItem(item);
                            const action = {
                              type: OPEN_MODAL,
                              Component: <ChangeDate />,
                            };
                            dispatch(action);
                          }}
                        className="px-3 py-3 ">
                            <HiEllipsisVertical className='text-lg' />
                        </td>
                    </tr>

                </>
            )

        })

    }


    const headers = [
        { key: 'stt', label: 'STT', accessor: 'stt' },
        { key: 'bookingCode', label: 'Booking Code', accessor: 'bookingCode' },
        { key: 'ticketNumber', label: 'Số vé', accessor: 'ticketNumber' },
        { key: 'eventName', label: 'Tên sự kiện', accessor: 'eventName' },
        { key: 'status', label: 'Tình trạng sử dụng', accessor: 'status' },
        { key: 'dateUsed', label: 'Ngày sử dụng', accessor: 'dateUsed' },
        { key: 'ticketDate', label: 'Ngày xuất vé', accessor: 'ticketDate' },
        { key: 'checkin', label: 'Cổng check - in', accessor: 'checkin' },
    ];


    const records = data.slice((currentPage - 1) * 7, currentPage * 7).map((item) => ({
        stt: item.stt,
        bookingCode: item.bookingCode,
        ticketNumber: item.ticketNumber,
        eventName: item.eventName,
        status: item.status,
        dateUsed: item.dateUsed,
        ticketDate: item.ticketDate,
        checkin: item.checkin,
    }));


    return (
        <div className=" ticket-list">
            <div className='m-3 '>

                <div className='pt-3 text-3xl font-bold '>
                    <h1>Danh sách vé</h1>
                </div>
                <div className='flex justify-between mt-2 '>
                    <div className='search'>
                        <input value={searchValue} onChange={handleSearch} type="search" placeholder='Tìm bằng số vé' />
                        <SearchOutlined className='search-icon' />
                    </div>
                    <div
                     
                    className="flex button-content">
                        <button
                         onClick={(e) => {
                              
                            e.preventDefault()
                            const action = {
                                type: OPEN_MODAL,
                                Component: <LocVe />,
                            }
                            dispatch(action)
                        }} 
                           className="flex items-center justify-center mr-2 filter">
                            <span className='mb-1' ><FilterOutlined className='mx-1' /></span>
                            <span className='mx-2'> Lọc vé</span>
                          
                        </button>
                        <ModalHOC />
                        <button className="export">
                            <CSVLink data={records} headers={headers} filename={"danh-sach-ve.csv"}>
                                Xuất file(.csv)
                            </CSVLink>
                        </button>


                    </div>

                </div>

                <div className="relative pb-6 mt-3 overflow-x-auto rounded-t-xl ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase table-header bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="w-4 px-6 py-3 ">
                                    STT
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Booking Code
                                </th>
                                <th scope="col" className="px-6 py-3 pl-3 ">
                                    Số vé
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Tên sự kiện
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Tình trạng sử dụng
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Ngày sử dụng
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Ngày xuất vé
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Cổng check - in
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody> 
                            {renderDanhSachVe()}
                        </tbody>
                    </table>
                    <div className='flex items-center justify-center my-5'>
                        <Pagination
                            className="flex"
                            current={currentPage}
                            defaultPageSize={7}
                            total={data.length}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}