"use client";

import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/styles/calendar.scss"; // Custom styles for the calendar

type BookingCalendarProps = {
  bookedDates: string[]; // array of booked dates (mocked for now)
};

const BookingCalendar = ({ bookedDates }: BookingCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    if (bookedDates.includes(date.toISOString().split("T")[0])) {
      alert("This date is already booked. Please select another date.");
      return;
    }
    setSelectedDate(date);
  };

  return (
    <div className="booking-calendar">
      <Calendar
        onChange={(date) => handleDateChange(date as Date)}
        tileClassName={({ date }) =>
          bookedDates.includes(date.toISOString().split("T")[0]) ? "booked" : ""
        }
      />
      {selectedDate && <p>You selected: {selectedDate.toDateString()}</p>}
    </div>
  );
};

export default BookingCalendar;
