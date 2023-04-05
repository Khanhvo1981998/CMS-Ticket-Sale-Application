import { SearchOutlined } from '@ant-design/icons'
import { Button, DatePicker, Pagination, PaginationProps } from 'antd'
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { data } from '../../data'
import "./DoiSoatVe.css"

type Props = {}
interface MyPaginationProps extends PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    pageCount: number;
  }

export default function DoiSoatVePage({ }: Props) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const [showAll, setShowAll] = useState(true);
    const [showChecked, setShowChecked] = useState(false);
    const [showUnchecked, setShowUnchecked] = useState(false);


    const [filteredData, setFilteredData] = useState(data)

    const [showExportButton, setShowExportButton] = useState(false);
    const [showCompleteButton, setShowCompleteButton] = useState(false);



    const onCheckAllChange = (e: any) => {
        setShowAll(e.target.checked);
        setShowChecked(false);
        setShowUnchecked(false);

    };

    const onCheckedChange = (e: any) => {
        setShowChecked(e.target.checked);
        setShowAll(false);
        setShowUnchecked(false)

    };

    const onUncheckedChange = (e: any) => {
        setShowUnchecked(e.target.checked);
        setShowAll(false);
        setShowChecked(false)

    };


    const onFilterClick = () => {
        let filteredItems = data.filter((item) =>
            item.ticketNumber
        );

        if (showChecked) {
            filteredItems = filteredItems.filter((item) => item.checked);
            setShowExportButton(true);
            setShowCompleteButton(false)
            console.log({ showExportButton });;
        } else if (showUnchecked) {
            filteredItems = filteredItems.filter((item) => !item.checked);
            setShowExportButton(false);
            setShowCompleteButton(true);
            console.log({ showExportButton });

        } else {
            setShowAll(true)
            setShowExportButton(false);
            setShowCompleteButton(false);
            console.log({ showExportButton });
        }

        setFilteredData(filteredItems);
    };

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


    const renderButton = () => {
        if (showExportButton && !showCompleteButton) {
            return (
                <button className="export">
                            <CSVLink data={records} headers={headers} filename={"doi-soat-ve.csv"}>
                                Xuất file(.csv)
                            </CSVLink>
                        </button>
            );
        }
        if (!showExportButton && showCompleteButton) {
            return (
                <button className="checked">Chốt đối soát</button>
            );
        }
        if (!showExportButton && !showExportButton) {
            return (
                <div></div>
            )
        }

    };

 

    const getPageCount = () => {
        const itemsPerPage = 7;
        let filteredItems = data.filter((item) =>
          item.ticketNumber.toString().includes(searchValue)
        );
      
        if (showChecked) {
          filteredItems = filteredItems.filter((item) => item.checked);
        } else if (showUnchecked) {
          filteredItems = filteredItems.filter((item) => !item.checked);
        }
      
        console.log({filteredItems});
        
        const itemCount = filteredItems.length;
        const pageCount = Math.ceil(itemCount / itemsPerPage);
      
        // Kiểm tra xem có phần dư không
        const Remainder = itemCount % itemsPerPage !== 0;
      
        // Nếu có phần dư, thêm 1 trang
        if (Remainder) {
          return pageCount + 1;
        }
        return pageCount;
      };
      
      const onPageChange = handlePageChange as (page: number) => void;

      const paginationProps = {
        current: currentPage,
        onChange: onPageChange,
        total: getPageCount() * 7
      };
      
    const renderDanhSachVe = () => {
        const items = filteredData
            .slice((currentPage - 1) * 7, currentPage * 7).filter((item) =>
                item.ticketNumber.toString().includes(searchValue));
        return items.map((item, index) => {

            return (
                <>
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap ">
                            {item.stt}
                        </td>

                        <td className="px-2 py-3">
                            {item.ticketNumber}
                        </td>

                        <td className="px-4 py-4">
                            {item.dateUsed}
                        </td>

                        <td className="px-4 py-3 ">
                            {item.ticketType}
                        </td>
                        <td className="px-4 py-3 ">
                            {item.checkin}
                        </td>
                        <td className="px-4 py-3 ">

                            {!item.checked ? (
                                <i style={{ color: '#a5a8b1' }}>Chưa đối soát</i>
                            ) : (
                                <i className="text-red-500 ">Đã đối soát</i>
                            )}
                        </td>
                    </tr>

                </>
            )

        })

    }
    return (
        <div className='flex gap-3'>

            <div className="w-3/4 ticket-checked ">
                <div className='mx-3 ml-2'>
                    <div className='pt-3 text-3xl font-bold '>
                        <h1>Đối soát vé</h1>
                    </div>
                    <div className='flex justify-between mt-2 '>
                        <div className='search'>
                            <input className='' value={searchValue} onChange={handleSearch} type="search" placeholder='Tìm bằng số vé' />
                            <SearchOutlined className='search-icon' />
                        </div>
                        <div className="flex button-content">
                            {renderButton()}
                        </div>
                    </div>

                    <div className="relative mt-3 overflow-x-auto rounded-t-xl ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase table-header bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="w-4 px-6 py-3 ">
                                        STT
                                    </th>

                                    <th scope="col" className="px-6 py-3 pl-3 ">
                                        Số vé
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        Ngày sử dụng
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        Tên loại vé
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
                            {/* <Pagination
                                className="flex"
                                current={currentPage}
                                defaultPageSize={7}
                                total={data.length}
                                onChange={handlePageChange}
                            /> */}
                        <Pagination {...paginationProps} />
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-1/4 filter-ticket">
                <div className='mx-2 '>
                    <div className='mt-3 mb-4'>
                        <h1 className='text-2xl font-bold '>Lọc vé</h1>
                    </div>
                    <div className='flex mb-3'>
                        <div className='mr-2 w-72'>
                            <h1 className='text-sm'>Tình trạng đối soát</h1>
                        </div>
                        <div className=''>
                            <Checkbox
                                checked={showAll} onChange={onCheckAllChange}
                            >Tất cả
                            </Checkbox>

                            <Checkbox
                                checked={showChecked} onChange={onCheckedChange}
                            >Đã đối soát
                            </Checkbox>

                            <Checkbox
                                checked={showUnchecked} onChange={onUncheckedChange}
                            >Chưa đối soát
                            </Checkbox>
                        </div>
                    </div>
                    <div className='flex mb-3 ' >
                        <div className='w-32'>
                            <h1>Loại vé</h1>
                        </div>
                        <div className='ml-2 '>
                            <h1>Vé cổng</h1>
                        </div>
                    </div>
                    <div className='flex mb-3' >
                        <div className='w-32 mt-2'>
                            <h1>Từ ngày</h1>
                        </div>
                        <div className='ml-2 '>
                            <DatePicker />
                        </div>
                    </div>
                    <div className='flex mb-3' >
                        <div className='w-32 mt-2'>
                            <h1>Đến ngày</h1>
                        </div>
                        <div className='ml-2 '>
                            <DatePicker />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={onFilterClick}
                            className='filter-btn'>Lọc</button>
                    </div>
                </div>

            </div>
        </div>

    )
}