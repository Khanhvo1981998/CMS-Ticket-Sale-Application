import { CalendarOutlined } from '@ant-design/icons'
import Chart from '../../../components/Chart/Chart'
import ChartEvent from '../../../components/ChartEvent/ChartEvent'
import ChartFamily from '../../../components/ChartFamily/ChartFamily'
import "../HomeContent/HomeContent.css"


type Props = {
  
}

export default function HomeContent({}: Props) {
  return (
    <div className="chart-main ">
            <div className='pt-3 ml-3 text-3xl font-bold '>
                <h1>Thống kê</h1>
            </div>
            <div className='flex mx-5 mt-5 mb-3 title-header'>
                <div className='w-24 '>
                    <h3 className='font-bold '>Doanh thu</h3>
                </div>
                <div className="bottom-0 border calendar">
                    <div className='flex items-center '>
                        <span>Tháng 4, 2023</span>
                        <CalendarOutlined className='ml-2 text-2xl text-amber-500' />
                    </div>
                </div>
            </div>
            <div className='flex gap-6 mx-5'>
                <div className='w-full shape'>
                    {/* <ChartAria /> */}
                    <Chart />
                </div>
            </div>
            <div className='mt-4 ml-10'>
                <div>
                    <span>Tổng doanh thu theo tuần</span>

                </div>
                <div>

                    <b className='mr-2'>525.145.000</b><span>đồng</span>
                </div>
            </div>
            <div className='flex justify-around mt-3'>
                <div className="bottom-0 calendar">
                    <div className='flex items-center p-2 border rounded'>
                        <span>Tháng 4, 2023</span>
                        <CalendarOutlined className='ml-2 text-2xl text-amber-500' />
        
                    </div>
                </div>
                <div className='chart-circle'>
                    <div className='flex justify-center '>
                        <span>Gói gia đình</span>
                    </div>

                    <div className='mb-8 text-3xl h-50 w-60 '>
                        <div className='relative border-none'>
                            <div className="chart-value-ticket-used-family">
                                <span className='p-2 text-xl bg-white rounded shadow '>13568</span>
                            </div>
                            <div className="chart-value-ticket-unused-family">
                                <span className='p-2 text-xl bg-white rounded shadow'>56024</span>
                            </div>
                            <ChartFamily  />
                        </div>

                    </div>
                </div>
                <div className='chart-circle'>
                    <div className='flex justify-center '>
                        <span>Gói sự kiện </span>
                    </div>

                    <div className='mb-8 text-3xl h-50 w-60 '>
                        <div className='relative'>
                            <div className="chart-value-ticket-used-event">
                                <span className='p-2 text-xl bg-white rounded shadow '>30256</span>
                            </div>
                            <div className="chart-value-ticket-unused-event">
                                <span className='p-2 text-xl bg-white rounded shadow'>28302</span>
                            </div>
                            <ChartEvent />
                        </div>

                    </div>
                </div>

                <div className='mt-4 '>
                    <div className='flex'>
                        <div className='w-10 h-5 rounded note-color-used'></div><span className='pl-3 '>Vé đã sử dụng</span>
                    </div>
                    <div className='flex mt-3 '>
                        <div className='w-10 h-5 rounded note-color-unused'></div><span className='pl-3 '>Vé chưa sử dụng</span>
                    </div>
                </div>
            </div>

        </div>
  )
}