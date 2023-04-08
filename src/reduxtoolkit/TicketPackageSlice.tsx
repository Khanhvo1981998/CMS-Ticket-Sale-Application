import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase/firebase';
import { fetchTicketPackages, fetchTickets } from './actions/TicketActions';
import { RootState } from './storeSlice';


export interface TicketPackage {
  stt: number;
  bookingCode: string;
  ticketNumber: number;
  eventName: string;
  ticketCombo: string;
  ticketPrice: string;
  ticketName: string;
  ticketType: string;
  status: string;
  startDate: string;
  endDate: string;
  checkin: string;
  checked: boolean;
  used: boolean;
  expired: boolean;
}

interface TicketPackageState {
  ticketPackage: TicketPackage[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketPackageState = {
    ticketPackage: [],
  isLoading: false,
  error: null,
};
export const ticketPackageSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicketRequest: (state, action: PayloadAction<TicketPackage>) => {
      state.isLoading = true;
      state.error = null;
    },
    addTicketSuccess: (state, action: PayloadAction<TicketPackage>) => {
      state.isLoading = false;
      state.ticketPackage.push(action.payload);
    },
    addTicketFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketPackages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTicketPackages.fulfilled, (state, action: PayloadAction<TicketPackage[]>) => {
        state.ticketPackage = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTicketPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Lỗi';
      });
  },
});
export const selectTicketPackages = (state: RootState) => state.ticketPackage.ticketPackage;
export const { addTicketRequest, addTicketSuccess, addTicketFailure } = ticketPackageSlice.actions;

export default ticketPackageSlice.reducer;



