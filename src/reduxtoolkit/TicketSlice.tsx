import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase/firebase';
import { fetchTickets } from './actions/TicketActions';
import { RootState } from './storeSlice';


export interface Ticket {
 
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
  startTime:string;
  endTime:string;
  numberOfTickets:string;
  checked: boolean;
  used: boolean;
  expired: boolean;
}

interface TicketsState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  isLoading: false,
  error: null,
};
export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action: PayloadAction<Ticket[]>) => {
        state.tickets = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Lỗi';
      });
  },
});
export const selectTickets = (state: RootState) => state.ticket.tickets;

export default ticketsSlice.reducer;



