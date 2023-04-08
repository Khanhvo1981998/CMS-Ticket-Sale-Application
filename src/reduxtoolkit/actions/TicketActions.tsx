import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Ticket } from "../TicketSlice";
import { addTicketFailure, addTicketRequest, addTicketSuccess } from "../TicketPackageSlice";

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

export const addTicket = (ticket: Ticket) => async (dispatch: any) => {
  try {
    dispatch(addTicketRequest(ticket));
    const ticketsRef = (db as any).collection('tickets-packages');
    const docRef = await ticketsRef.add(ticket);
    const newTicket = { ...ticket, id: docRef.id };
    dispatch(addTicketSuccess(newTicket));
  } catch (error) {
    dispatch(addTicketFailure(error as unknown as string));
  }
};


