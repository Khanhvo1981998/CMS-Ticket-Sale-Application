import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { data } from '../data';

interface Ticket {
  stt: number;
  bookingCode: string;
  ticketNumber: number;
  eventName: string;
  ticketCombo: string;
  ticketPrice: string;
  ticketName: string;
  ticketType: string;
  status: string;
  dateUsed: string;
  ticketDate: string;
  checkin: string;
  checked: boolean;
  used: boolean;
  expired: boolean;
}

interface SearchState {
  usedStatus: 'all' | 'used' | 'unused' | 'expired';
  gateCheckin: number[];
  startDate: Date | null;
  endDate: Date | null;
  filteredData: Ticket[];
}

const initialData = data.map((ticket) => ({ ...ticket, used: false, expired: false }));

const initialState: SearchState = {
  usedStatus: 'all',
  gateCheckin: [],
  startDate: null,
  endDate: null,
  filteredData: initialData,
};


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setStartDate: (state, action: PayloadAction<Date>) => {
        state.startDate = action.payload;
      },
      setEndDate: (state, action: PayloadAction<Date>) => {
        state.endDate = action.payload;
      },
      setUsedStatus: (state, action: PayloadAction<'all' | 'used' | 'unused' | 'expired'>) => {
        state.usedStatus = action.payload;
      },
    },
  });

export const {setUsedStatus,setStartDate,setEndDate} = filterSlice.actions

export default filterSlice.reducer