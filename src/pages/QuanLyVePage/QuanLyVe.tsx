import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { data } from '../../data'
import "./QuanLyVe.css"

type Props = {}

export default function QuanLyVe({ }: Props) {
    const renderDanhSachVe = () => {
        return data.map((item, index) => {
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
                    </tr>

                </>
            )

        })

    }
    return (
        <div className=" ticket-list">
            <div className='pt-3 text-3xl font-bold '>
                <h1>Danh sách vé</h1>
            </div>
            <div className='flex justify-between mt-2 '>
                <div className='search'>
                    <input className='' type="search" placeholder='Tìm bằng số vé' />
                    <SearchOutlined className='search-icon' />
                </div>
                <div className="flex button-content">
                    <button className="flex items-center justify-center mr-2 filter">
                        <span><FilterOutlined className='mx-1' /></span>
                        <span className='mx-2'><span> Lọc vé</span></span>

                    </button>
                    <button className="export">Xuất file(.csv)</button>
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
                        </tr>
                    </thead>
                    <tbody>
                        {renderDanhSachVe()}
                    </tbody>

                </table>
            </div>


        </div>
    )
}