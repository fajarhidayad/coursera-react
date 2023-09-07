import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";
import { initializeTimes, updateTimes } from "./BookingPage";

describe("Booking form", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm availableTimes={{ times: "17.00" }} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test("Update times function return as state", () => {
    const times = { times: "17.00" };
    const state = updateTimes(times, { type: "UPDATE_TIMES", value: "18.00" });

    expect(state.times).toBe("18.00");
  });

  test("Update times function return as state2", () => {
    const times = { times: "17.00" };
    const state = updateTimes(times, { value: "18.00" });

    expect(state).toBe(times);
  });

  test("initializeTimes function return time", () => {
    const times = initializeTimes();
    expect(times).toBe("17.00");
  });

  test("BookingForm can be submitted", () => {
    const { getByRole } = render(
      <BookingForm availableTimes={{ times: "17.00" }} />
    );

    const form = getByRole("form");
    expect(form).toBeInTheDocument();
    fireEvent.click(getByRole("button"));
  });
});
