import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

const BookingForm = (props) => {
  const occasion = ["Birthday", "Anniversary"];
  const date = Date.now();

  const formik = useFormik({
    initialValues: {
      date: date.toString(),
      guest: 1,
      occasion: occasion[0],
      time: "17.00",
    },
    onSubmit: (values) => props.submitForm(values),
  });

  return (
    <form className="form" role="form" onSubmit={formik.handleSubmit}>
      <h1>Book Now</h1>
      <div className="form-control">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          required
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
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
          name="guest"
          value={formik.values.guest}
          onChange={formik.handleChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          required
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
