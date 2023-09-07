import React from "react";
import BookingForm from "./BookingForm";
import "./booking.css";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const data = fetchAPI();
      return data;
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const data = fetchAPI();
  return data;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (!formData) return;
    submitAPI(formData);
    localStorage.setItem("Reservation", JSON.stringify(formData));
    navigate("/booking/confirmed");
  };

  return (
    <main className="container">
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    </main>
  );
};

export default BookingPage;
