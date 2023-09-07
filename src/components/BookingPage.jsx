import React from "react";
import BookingForm from "./BookingForm";
import "./booking.css";
import { useReducer } from "react";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: action.value };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const times = "17.00";
  return times;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main className="container">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default BookingPage;
