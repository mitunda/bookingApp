// Booking.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// This component renders a form for booking tickets
const Booking = ({ bus, onBooking }) => {
  const [passengers, setPassengers] = useState([{ name: '', age: '' }]);

  const handleChange = (index, event) => {
    const newPassengers = [...passengers];
    newPassengers[index][event.target.name] = event.target.value;
    setPassengers(newPassengers);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: '', age: '' }]);
  };

  const removePassenger = (index) => {
    const newPassengers = [...passengers];
    newPassengers.splice(index, 1);
    setPassengers(newPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      bus,
      passengers,
    };
    onBooking(bookingData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Passenger Details</h4>
      {passengers.map((passenger, index) => (
        <div key={index}>
          <Form.Group controlId={`name-${index}`}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={passenger.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </Form.Group>

          <Form.Group controlId={`age-${index}`}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={passenger.age}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </Form.Group>

          {index === passengers.length - 1 && (
            <Button variant="link" onClick={addPassenger}>
              Add Passenger
            </Button>
          )}

          {passengers.length > 1 && (
            <Button variant="link" onClick={() => removePassenger(index)}>
              Remove Passenger
            </Button>
          )}
        </div>
      ))}

      <Button variant="primary" type="submit">
        Confirm Booking
      </Button>
    </Form>
  );
};

export default Booking;