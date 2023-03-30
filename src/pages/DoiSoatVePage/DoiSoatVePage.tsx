import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { data } from '../../data'
import "./DoiSoatVe.css"

type Props = {}

export default function DoiSoatVePage({}: Props) {
    const newData = data.filter(item => item.checked === false)
    const renderDanhSachVe = () => {
        return newData.map((item, index) => {
            console.log({ item });
            return (
                <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                            {(!item.checked) ? <i>Chưa đối soát</i> : ""}
                        </td>
                    </tr>

                </>
            )

        })

    }
  return (
    <div className=" ticket-checked">
    <div className='pt-3 text-3xl font-bold '>
        <h1>Đối soát vé</h1>
    </div>
    <div className='flex justify-between mt-2 '>
        <div className='search'>
            <input className='' type="search" placeholder='Tìm bằng số vé' />
            <SearchOutlined className='search-icon' />
        </div>
        <div className="flex button-content">

            <button className="checked">Chốt đối soát</button>
        </div>
    </div>

    <div className="relative pb-6 mt-3 overflow-x-auto rounded-t-xl ">
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
    </div>


</div>
  )
}