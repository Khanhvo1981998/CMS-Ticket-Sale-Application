import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Ticket } from "../TicketSlice";
import {  TicketPackage } from "../TicketPackageSlice";

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  const ticketsCollection = collection(db, 'tickets');
  const querySnapshot = await getDocs(ticketsCollection);
  const tickets: Ticket[] = [];
  querySnapshot.forEach((doc) => {
    tickets.push({ id: doc.id, ...doc.data() } as unknown as Ticket);
  });
  return tickets;
});


export const fetchTicketPackages = createAsyncThunk('tickets-packages/fetchTickets', async () => {
  const ticketsCollection = collection(db, 'tickets-packages');
  const querySnapshot = await getDocs(ticketsCollection);
  const tickets: Ticket[] = [];
  querySnapshot.forEach((doc) => {
    tickets.push({ id: doc.id, ...doc.data() } as unknown as Ticket);
  });
  return tickets;
});



export const addTicket = createAsyncThunk(
  'tickets-packages/addTicket',
  async (ticketPackage: TicketPackage, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, 'tickets-packages'), ticketPackage);
      const newTicketPackage = { id: docRef.id, ...ticketPackage };
      return newTicketPackage;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTicketPackageAsync = createAsyncThunk(
  'tickets/updateTicket',
  async ({ id, ticketPackage }: { id: string, ticketPackage: TicketPackage }, { rejectWithValue }) => {
    const { bookingCode, ...data } = ticketPackage;
    try {
      const docRef = doc(db, 'tickets-packages', id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        await updateDoc(docRef, data);
        return ticketPackage;
      } else {
        return rejectWithValue('Data not found');
      }
    } catch (error) {
      return rejectWithValue(`Error updating ticket package: ${(error as Error).message}`);
    }
  }
);
// export const updateTicketPackageAsync = createAsyncThunk(
//   'tickets/updateTicketPackageAsync',
//   async (payload: { id: string; ticketPackage: TicketPackage }, { rejectWithValue }) => {
//     const { id, ticketPackage } = payload;
//     console.log({id});
    
//     try {
//       const docRef = doc(db, 'tickets-packages', id);
//       const snapshot = await getDoc(docRef);
//       if (snapshot.exists()) {
//         const {bookingCode,...data } = ticketPackage;
//         await updateDoc(docRef, data);
//         return ticketPackage;
//       } else {
//         return rejectWithValue('Data not found');
//       }
//     } catch (error) {
//       return rejectWithValue(`Error updating ticket package: ${(error as Error).message}`);
//     }
//   }
// );


