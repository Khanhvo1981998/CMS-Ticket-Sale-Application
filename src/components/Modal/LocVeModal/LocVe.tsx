import { Checkbox, DatePicker } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../../data';
import { RootState } from '../../../reduxtoolkit/storeSlice';

type Props = {}

export default function LocVe({}: Props) {
    const dispatch = useDispatch()
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

  return (
    <div className='wrapper-model'>
    <div className='flex justify-center mb-3'>
        <h1 className='text-3xl font-bold '>Lọc vé</h1>
    </div>
    <div className='flex mb-3 '>
        <div className='grid '>
            <span>Từ ngày</span>
            <DatePicker  />
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
        <button
        // onClick={handleFilter}
        className='filter-btn'>Lọc</button>
    </div>
</div>
  )
}