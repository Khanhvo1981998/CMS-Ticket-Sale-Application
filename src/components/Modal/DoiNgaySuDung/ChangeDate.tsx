import { DatePicker } from 'antd'
import "./ChangeDate.css"

type Props = {}

export default function ChangeDate({}: Props) {
  return (
    <div className='change-date'>
      <div className='flex justify-center text-2xl font-bold '> <h1 className='mb-4 '>Đổi ngày sử dụng vé</h1></div>
       
        <div className='flex mb-2'>
            <span className='mr-3'>Số vé </span>
            <span className='ml-24 '>BLT2021234</span>
        </div>
        <div className='flex mb-2'>
            <span className='mr-1 '>Loại vé </span>
            <span className='ml-24 '>Vé cổng</span>
        </div>
        <div className='flex mb-2'>
            <span className='mr-2 '>Tên sự kiện</span>
            <span className='ml-16 '>	Hội chợ triển lãm tiêu dùng 2023	</span>
        </div>
        <div className='flex mb-4'>
            <span>Hạn sử dụng</span>
            <DatePicker className='ml-16 ' />
        </div>
        <div className='flex justify-center'>
        <button className='px-8 py-1 border-orange-400 rounded border-1'> <span className='font-bold text-orange-400'> Huỷ</span></button>
        <button className='px-8 py-1 ml-4 bg-orange-400 border-orange-400 rounded border-1'> <span className='font-bold text-white'> Huỷ</span></button>
      </div>
    </div>
  )
}