import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Calendar, Checkbox, DatePicker, Dropdown, MenuProps, message, Select, Space, TimePicker } from 'antd'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../lib/firebase/firebase';
import { fetchTickets } from '../../../reduxtoolkit/actions/TicketActions';
import { closeModal } from '../../../reduxtoolkit/ModalSlice';
import { useThunkDispatch } from '../../../reduxtoolkit/storeSlice';
import "./ThemGoiVe.css"

type Props = {}


export default function ThemGoiVe({ }: Props) {

const dispatch = useDispatch()
  const [stt, setSTT] = useState('');
  const [bookingCode, setBookingCode] = useState('');
  const [ticketName, setTicketName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketCombo, setTicketCombo] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const ticketsRef = collection(db, 'tickets-packages');
      const ticketRef = doc(ticketsRef);

      await setDoc(ticketRef, {
        stt,
        bookingCode,
        ticketName,
        startDate,
        endDate,
        ticketPrice,
        ticketCombo,
        status,
      });

      // Reset form after successful submit
      setSTT('');
      setTicketName('');
      setBookingCode('');
      setStartDate('');
      setEndDate('');
      setTicketPrice('');
      setTicketCombo('');
      setStatus('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    setStatus(value)
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items: MenuProps['items'] = [
    {
      label: 'Đang áp dụng',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Tắt',
      key: '2',
      icon: <UserOutlined />,
    },

  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleOk = () => {
    dispatch(closeModal());
  };


  return (
    <form
      onSubmit={handleSubmit}
      className='add-ticket'>
      <div className='flex justify-center mb-4 '>
        <h1 className='text-2xl font-bold '>Thêm gói vé</h1>
      </div>

      <div className='mb-3'>
        <h1 className='mb-1 '>Tên gói vé <span className='text-red-700 '>*</span> </h1>
        <div>
          <input onChange={(e) => setTicketName(e.target.value)} className='h-8 pl-1 border-gray-400 rounded border-1 w-60' type="text" placeholder='Nhập tên gói vé' />
        </div>
      </div>

      <div className='flex mb-3'>
        <div >
          <div className='mb-1 '>  <h1>Ngày áp dụng</h1></div>
          <div className='flex '>
            <DatePicker

              onChange={(date) => {
                if (date) {
                  setStartDate(date.format("DD/MM/YYYY"));
                }
              }}

              className='border-gray-400 border-1' />
            <TimePicker className='ml-2 border-gray-400 border-1' aria-label='custom' />
          </div>
        </div>
        <div className='pl-8' >
          <div className='mb-1 '>  <h1>Ngày hết hạn</h1></div>
          <div className='flex '>
            <DatePicker
              onChange={(date) => {
                if (date) {
                  setEndDate(date.format("DD/MM/YYYY"));
                }
              }}
              className='border-gray-400 border-1' />
            <TimePicker className='ml-2 border-gray-400 border-1' aria-label='custom' />
          </div>
        </div>
      </div>

      <div className='mb-3 '>
        <div className='mb-2 '>
          <h1>Giá vé áp dụng</h1>
        </div>
        <div className='mb-2 '>
          <Checkbox />
          <span className='pl-1 pr-1'>Vé lẻ (vnđ/vé) với giá
          </span>
          <input
            onChange={(e) => setTicketPrice(e.target.value)}
            className='w-24 h-8 pl-1 bg-gray-100 border-none rounded ' type="text" placeholder='Giá vé' /> / vé
        </div>
        <div>
          <Checkbox />
          <span className='pl-1 pr-1'>Combo vé với giá
          </span>
          <input
            onChange={(e) => setTicketCombo(e.target.value)}
            className='w-24 h-8 pl-1 bg-gray-100 border-none rounded ' type="text" placeholder='Giá vé' /> / <input className='h-8 pl-1 bg-gray-100 border-none rounded w-14' type="text" placeholder='Giá vé' /> vé
        </div>
      </div>

      <div className='mb-3 '>
        <div className='mb-2 '>
          <h1>Tình trạng</h1>
        </div>
        <div>
          <Space wrap>
            <Select
              defaultValue="Đang áp dụng"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'Đang áp dụng', label: 'Đang áp dụng' },
                { value: 'Tắt', label: 'Tắt' },
              ]}
            />

          </Space>
        </div>
      </div>

      <div className='mb-3 '>
        <i className='text-gray-400 '>  <span className='text-red-700 '>*</span> là thông tin bắt buộc</i>
      </div>

      <div className='flex justify-center'>
        <button
          // onClick={handleCancel}
          className='px-8 py-1 border-orange-400 rounded border-1'> <span className='font-bold text-orange-400'> Huỷ</span></button>
        <button
          // onClick={handleSubmit}
          onClick={handleOk}
          className='px-8 py-1 ml-4 bg-orange-400 border-orange-400 rounded border-1'> <span className='font-bold text-white'> Lưu</span></button>
      </div>
    </form>


  )
}