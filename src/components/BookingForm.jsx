import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const occasion = ["Birthday", "Anniversary"];

  const [date, setDate] = useState("");
  const [guest, setGuest] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState(occasion[0]);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <form
      className="form"
      role="form"
      onSubmit={(e) => {
        e.preventDefault();
        props.submitForm({
          date,
          guest,
          occasion: selectedOccasion,
          time: selectedTime,
        });
      }}
    >
      <h1>Book Now</h1>
      <div className="form-control">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          {props.availableTimes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
        >
          {occasion.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" role="button" className="btn">
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
