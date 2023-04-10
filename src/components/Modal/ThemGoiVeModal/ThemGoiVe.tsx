import { Checkbox, DatePicker, message, Select, Space, TimePicker } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTicket } from "../../../reduxtoolkit/actions/TicketActions";
import { closeModal } from "../../../reduxtoolkit/ModalSlice";
import { AppDispatch } from "../../../reduxtoolkit/storeSlice";
import { TicketPackage } from "../../../reduxtoolkit/TicketPackageSlice";
import "./ThemGoiVe.css";

type Props = {}


export default function ThemGoiVe({ }: Props) {
   const useThunkDispatch = () => useDispatch<AppDispatch>();

  // const dispatch = useDispatch()
  const dispatch = useThunkDispatch()
  const [stt, setSTT] = useState('');
  const [bookingCode, setBookingCode] = useState('');
  const [ticketName, setTicketName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketCombo, setTicketCombo] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [status, setStatus] = useState('Đang áp dụng');
  const [eventName, setEventName] = useState('');
  const [ticketNumber, setTicketNumber] = useState(1);

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    setStatus(value)
  };

  const handleOk = () => {
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

 


  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    const newTicketPackage: TicketPackage = {
      ticketName: ticketName,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
      ticketPrice: ticketPrice,
      ticketCombo: ticketCombo,
      bookingCode: bookingCode,
      status: status,
      numberOfTickets: numberOfTickets,
      eventName: eventName,
      ticketNumber: ticketNumber,
    };
  
    try {
      
      await dispatch(addTicket(newTicketPackage));
      message.success("Cập nhật thành công")
      // Reset form fields here
    } catch (error) {
      console.log(error);
      message.error("Cập nhật thất bại")
    }
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
            <TimePicker
              onChange={(time) => {
                if (time) {
                  setStartTime(time.format('HH:mm:ss'));
                }
              }}
              className='ml-2 border-gray-400 border-1' aria-label='custom' />
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
            <TimePicker
              onChange={(time) => {
                if (time) {
                  setEndTime(time.format('HH:mm:ss'));
                }
              }}
              className='ml-2 border-gray-400 border-1' aria-label='custom' />
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
            className='w-24 h-8 pl-1 bg-gray-100 border-none rounded ' type="text" placeholder='Giá vé' /> / <input onChange={(e) => setNumberOfTickets(e.target.value)} className='h-8 pl-1 bg-gray-100 border-none rounded w-14' type="text" placeholder='Giá vé' /> vé
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
          onClick={handleCancel}
          className='px-8 py-1 border-orange-400 rounded border-1'> <span className='font-bold text-orange-400'> Huỷ</span></button>
        <button
          onClick={handleOk}
          className='px-8 py-1 ml-4 bg-orange-400 border-orange-400 rounded border-1'> <span className='font-bold text-white'> Lưu</span></button>
      </div>
    </form>


  )
}