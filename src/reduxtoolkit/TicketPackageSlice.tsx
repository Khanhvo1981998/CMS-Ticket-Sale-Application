import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, ticketDB } from '../lib/firebase/firebase';
import { fetchTicketPackages, updateTicketPackageAsync } from './actions/TicketActions';
import { RootState } from './storeSlice';

export interface TicketPackage {
  
  bookingCode: string;
  eventName: string;
  ticketNumber: number;
  ticketCombo: string;
  ticketPrice: string;
  ticketName: string;
  status: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  numberOfTickets: string;
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
    addTicketRequest: (state) => {
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
    updateTicketPackage: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateTicketPackageSuccess: (state, action: PayloadAction<TicketPackage>) => {
      state.isLoading = false;
      const index = state.ticketPackage.findIndex(ticket => ticket.bookingCode === action.payload.bookingCode);
      if (index !== -1) {
        state.ticketPackage[index] = action.payload;
      }
    },
    updateTicketPackageFailure: (state, action: PayloadAction<string>) => {
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
      })
      .addCase(updateTicketPackageAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.ticketPackage.findIndex(ticket => ticket.bookingCode === action.payload.bookingCode);
        if (index !== -1) {
          state.ticketPackage[index] = action.payload;
        }
      })
      .addCase(updateTicketPackageAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to update ticket package';
      });
  },
});



export const selectTicketPackages = (state: RootState) => state.ticketPackage.ticketPackage;
export const {
  addTicketRequest,
  addTicketSuccess,
  addTicketFailure,
  updateTicketPackage,
  updateTicketPackageSuccess,
  updateTicketPackageFailure
} = ticketPackageSlice.actions;


export default ticketPackageSlice.reducer;





