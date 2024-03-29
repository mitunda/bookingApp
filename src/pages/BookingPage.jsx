// BookingPage.jsx
import React, { useState } from 'react';
import BusDetails from '../components/BusDetails';
import Booking from '../components/Booking';
// import { bookTicket } from '../services/busService';

// This is the page for booking tickets
const BookingPage = ({ bus }) => {
  const [booking, setBooking] = useState(null);

  const handleBooking = async (bookingData) => {
    const confirmationData = await bookTicket(bookingData);
    setBooking(confirmationData);
  };

  return (
    <div>
      <h1>Book Tickets</h1>
      <BusDetails bus={bus} />
      <Booking bus={bus} onBooking={handleBooking} />
      {booking && <p>Booking Successful!</p>}
    </div>
  );
};

export default BookingPage;