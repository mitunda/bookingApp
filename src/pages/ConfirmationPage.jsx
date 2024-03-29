// ConfirmationPage.jsx
import React from 'react';
import Confirmation from '../components/Confirmation';

// This is the page for displaying the booking confirmation
const ConfirmationPage = ({ booking }) => {
  return (
    <div>
      <h1>Booking Confirmation</h1>
      <Confirmation booking={booking} />
    </div>
  );
};

export default ConfirmationPage;