import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingEl = screen.getByText("Book Now!");
  expect(headingEl).toBeInTheDocument();
})