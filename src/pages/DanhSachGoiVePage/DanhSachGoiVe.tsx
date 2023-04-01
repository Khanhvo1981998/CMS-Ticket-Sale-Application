import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Checkbox, DatePicker, Modal, Pagination } from 'antd'
import { createObjectCsvWriter } from 'csv-writer'
import moment, { Moment } from 'moment'
import dayjs, { Dayjs } from 'dayjs';

import React, { useRef, useState } from 'react'
import { CSVLink } from 'react-csv'
import { data } from '../../data'

import "./DanhSachGoiVe.css"



interface Props {

}

export default function DanhSachGoiVe({ }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const [usedStatus, setUsedStatus] = useState('all');

    const handleUsedStatusChange = (value: string) => {
        setUsedStatus(value);
    };

    const [showAllGate, setShowAllGate] = useState(false);
    const handleGateChange = (index: number, value: boolean) => {

        if (index === 0 && value) {
            setShowAllGate(true);
        } else {
            setShowAllGate(false);
        }

    };



    const renderModal = () => {
        return (
            <Modal className='w-full h-56 ' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='wrapper-model'>
                    <div className='flex justify-center mb-3'>
                        <h1 className='text-3xl font-bold '>Lọc vé</h1>
                    </div>
                    <div className='flex mb-3 '>
                        <div className='grid '>
                            <span>Từ ngày</span>
                            <DatePicker />
                        </div>
                        <div className='grid ml-20 '>
                            <span>Đến ngày</span>
                            <DatePicker />
                        </div>
                    </div>

                    <div className='mb-3 used-status'>
                        <h1 className='mb-1 '>
                            Tình trạng sử dụng
                        </h1>
                        <div className='flex justify-between '>
                            <Checkbox
                                checked={usedStatus === 'all'} onChange={() => handleUsedStatusChange('all')}
                            >Tất cả
                            </Checkbox>

                            <Checkbox
                                checked={usedStatus === 'used'} onChange={() => handleUsedStatusChange('used')}
                            >Đã sử dụng
                            </Checkbox>

                            <Checkbox
                                checked={usedStatus === 'unused'} onChange={() => handleUsedStatusChange('unused')}
                            >Chưa sử dụng
                            </Checkbox>

                            <Checkbox
                                checked={usedStatus === 'expired'} onChange={() => handleUsedStatusChange('expired')}
                            >Hết hạn
                            </Checkbox>
                        </div>
                    </div>

                    <div className='mb-3 gate-checkin'>
                        <h1 className='mb-1 '>Cổng Check-in</h1>
                        <div className='grid grid-cols-3 gap-3 '>
                            <Checkbox
                                checked={showAllGate} onChange={(e) => handleGateChange(0, e.target.checked)}
                            >Tất cả
                            </Checkbox>

                            <Checkbox
                                onChange={(e) => handleGateChange(1, e.target.checked)} disabled={showAllGate}
                            >Cổng 1
                            </Checkbox>

                            <Checkbox
                                onChange={(e) => handleGateChange(2, e.target.checked)} disabled={showAllGate}
                            >Cổng 2
                            </Checkbox>

                            <Checkbox
                                onChange={(e) => handleGateChange(3, e.target.checked)} disabled={showAllGate}
                            >Cổng 3
                            </Checkbox>

                            <Checkbox
                                onChange={(e) => handleGateChange(4, e.target.checked)} disabled={showAllGate}
                            >Cổng 4
                            </Checkbox>

                            <Checkbox
                                onChange={(e) => handleGateChange(5, e.target.checked)} disabled={showAllGate}
                            >Cổng 5
                            </Checkbox>
                        </div>
                    </div>

                    <div className='flex justify-center '>
                        <button className='filter-btn'>Lọc</button>
                    </div>
                </div>
            </Modal>
        )
    }


    const renderDanhSachVe = () => {
        const items = data.slice((currentPage - 1) * 7, currentPage * 7).filter((item) =>
            item.ticketNumber.toString().includes(searchValue)
        );
        return items.map((item, index) => {
            return (
                <>
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap ">
                            {item.stt}
                        </td>
                        <td className="py-3 ">
                            {item.bookingCode}
                        </td>
                        <td className="py-3 ">
                            {item.ticketName}
                        </td>
                        <td className="py-3 ">
                            {item.dateUsed}
                        </td>

                        <td className="px-3 py-3">
                            {item.ticketDate}
                        </td>
                        <td className="px-4 py-3 ">
                            {`${item.ticketPrice} VNĐ`}
                        </td>
                        <td className="px-4 py-3 ">
                            {`${item.ticketCombo} VNĐ/4 Vé`}
                        </td>

                        <td className="py-3 ">

                            {(item.status === "Đã sử dụng") ? <span className='flex p-2 mx-4 rounded ticket-used'> <div className='w-3 h-3 mt-1 mr-1 rounded-full bg-slate-500'></div> Đã sử dụng</span> : (item.status === "Chưa sử dụng") ? <span className='flex p-2 mx-4 rounded ticket-unused '><div className='w-3 h-3 mt-1 mr-1 rounded-full bg-lime-500'></div>Chưa sử dụng</span> : (item.status === "Hết hạn") ? <span className='flex p-2 mx-4 rounded ticket-expired'><div className='w-3 h-3 mt-1 mr-1 bg-red-500 rounded-full'></div>Hết hạn</span> : ""}

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
                        <input className='' value={searchValue} onChange={handleSearch} type="search" placeholder='Tìm bằng số vé' />
                        <SearchOutlined className='search-icon' />
                    </div>
                    <div className="flex button-content">

                        <button className="export">
                            <CSVLink data={records} headers={headers} filename={"danh-sach-ve.csv"}>
                                Xuất file(.csv)
                            </CSVLink>
                        </button>

                        <button className="flex items-center justify-center ml-2 filter">

                            <span onClick={showModal} className='mx-2 add-ticket'> Thêm gói vé</span>
                            {renderModal()}
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
                                    Mã gói
                                </th>
                                <th scope="col" className="px-6 py-3 pl-3 ">
                                    Tên gói vé
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Ngày áp dụng
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Ngày hết hạn
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Giá vé (VNĐ/Vé)
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Giá Combo (VNĐ/Combo)
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Tình trạng
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