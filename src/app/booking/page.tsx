"use client";

import BookingCalendar from "@/components/BookingCalendar";
import BookingForm from "@/components/BookingForm";

export default function Booking() {
  // mock booked dates - Consider moving this to a server action or API call
  const bookedDates = ["2025-03-01", "2025-03-02", "2025-03-28"];

  return (
    <div className="booking-page">
      <h2>Book a service</h2>
      <BookingCalendar bookedDates={bookedDates} />
      <BookingForm />
    </div>
  );
}
