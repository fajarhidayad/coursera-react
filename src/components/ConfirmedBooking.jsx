import React from "react";
import "./confirmbooking.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState();

  useEffect(() => {
    const reserve = localStorage.getItem("Reservation");
    if (reserve) {
      setReservation(JSON.parse(reserve));
    } else {
      navigate("/booking");
    }
  }, []);

  if (!reservation) return <>Loading</>;

  return (
    <main className="container">
      <h1>Thanks for your reservation</h1>
      <h2>See you at the restaurant</h2>

      <div className="flex-col">
        <div className="card">
          <h3>Reservation Details</h3>
          <p>Occasion: {reservation.occasion}</p>
          <p>Total Guests: {reservation.guest}</p>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
        </div>

        <button onClick={() => navigate("/")} className="btn">
          Confirm
        </button>
      </div>
    </main>
  );
};

export default ConfirmedBooking;
