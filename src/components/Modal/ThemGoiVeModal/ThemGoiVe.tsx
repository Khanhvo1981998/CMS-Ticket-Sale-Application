import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Calendar, Checkbox, DatePicker, Dropdown, MenuProps, message, Space, TimePicker } from 'antd'
import "./ThemGoiVe.css"

type Props = {}

export default function ThemGoiVe({ }: Props) {


  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },

  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className='add-ticket'>
      <div className='flex justify-center mb-4 '>
        <h1 className='text-2xl font-bold '>Thêm gói vé</h1>
      </div>

      <div className='mb-3'>
        <h1 className='mb-1 '>Tên gói vé <span className='text-red-700 '>*</span> </h1>
        <div>
          <input className='h-8 pl-1 border-gray-400 rounded border-1 w-60' type="text" placeholder='Nhập tên gói vé' />
        </div>
      </div>

      <div className='flex mb-3'>
        <div >
          <div className='mb-1 '>  <h1>Ngày áp dụng</h1></div>
          <div className='flex '>
            <DatePicker className='border-gray-400 border-1' />
            <TimePicker className='ml-2 border-gray-400 border-1' aria-label='custom' />
          </div>
        </div>
        <div className='pl-8' >
          <div className='mb-1 '>  <h1>Ngày hết hạn</h1></div>
          <div className='flex '>
            <DatePicker className='border-gray-400 border-1' />
            <TimePicker className='ml-2 border-gray-400 border-1' aria-label='custom' />
          </div>
        </div>
      </div>

      <div className='mb-3 '>
        <div className='mb-2 '>
          <h1>Giá vé áp dụng</h1>
        </div>
        <div className='mb-2 '>
          <Checkbox  />
          <span className='pl-1 pr-1'>Vé lẻ (vnđ/vé) với giá
          </span>
          <input className='w-24 h-8 pl-1 bg-gray-100 border-none rounded ' type="text" placeholder='Giá vé' /> / vé
        </div>
        <div>
          <Checkbox />
          <span className='pl-1 pr-1'>Combo vé với giá
          </span>
          <input className='w-24 h-8 pl-1 bg-gray-100 border-none rounded ' type="text" placeholder='Giá vé' /> / <input className='h-8 pl-1 bg-gray-100 border-none rounded w-14' type="text" placeholder='Giá vé' /> vé
        </div>
      </div>

      <div className='mb-3 '>
        <div className='mb-2 '>
          <h1>Tình trạng</h1>
        </div>
        <div>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Đang áp dụng
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className='mb-3 '>
        <i className='text-gray-400 '>  <span className='text-red-700 '>*</span> là thông tin bắt buộc</i>
      </div>

      <div className='flex justify-center'>
        <button className='px-8 py-1 border-orange-400 rounded border-1'> <span className='font-bold text-orange-400'> Huỷ</span></button>
        <button className='px-8 py-1 ml-4 bg-orange-400 border-orange-400 rounded border-1'> <span className='font-bold text-white'> Huỷ</span></button>
      </div>
    </div>


  )
}