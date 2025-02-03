import { render, screen } from "@testing-library/react";
import BookingForm from '../app/components/Booking/booking_forms/BookingForm';
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe("BookingsForm Component", () => {
  test("renders form first name", () => {
    render(<BookingForm />);
    expect(screen.getByText("First Name")).toBeInTheDocument();
  });
  test("renders form last name", () => {
    render(<BookingForm />);
    expect(screen.getByText("Last Name")).toBeInTheDocument();
  });
  test("renders form email", () => {
    render(<BookingForm />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
  test("renders form phone number", () => {
    render(<BookingForm />);
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
  });
  test("renders form comment", () => {
    render(<BookingForm />);
    expect(screen.getByText("Comment")).toBeInTheDocument();
  });
  test("renders form available dates", () => {
    render(<BookingForm />);
    expect(screen.getByText("Available Dates")).toBeInTheDocument();
  });
  test("renders form available times", () => {
    render(<BookingForm />);
    expect(screen.getByText("Available Times")).toBeInTheDocument();
  });
  test("renders form number of guests", () => {
    render(<BookingForm />);
    expect(screen.getByText("Number of Guests")).toBeInTheDocument();
  });
});

