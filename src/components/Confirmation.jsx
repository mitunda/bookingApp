// Confirmation.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

// This component renders the booking confirmation details
const Confirmation = ({ booking }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Booking Confirmation</Card.Title>
        <Card.Text>
          <strong>Bus Name:</strong> {booking.bus.name}
        </Card.Text>
        <Card.Text>
          <strong>Source:</strong> {booking.bus.source}
        </Card.Text>
        <Card.Text>
          <strong>Destination:</strong> {booking.bus.destination}
        </Card.Text>
        <Card.Text>
          <strong>Departure:</strong> {booking.bus.departureTime}
        </Card.Text>
        <Card.Text>
          <strong>Arrival:</strong> {booking.bus.arrivalTime}
        </Card.Text>
        <Card.Text>
          <strong>Fare:</strong> {booking.bus.fare}
        </Card.Text>
        <Card.Text>
          <strong>Passengers:</strong>
          <ul>
            {booking.passengers.map((passenger, index) => (
              <li key={index}>
                {passenger.name} ({passenger.age} years old)
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Confirmation;