// BusDetails.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

// This component renders the details of a selected bus
const BusDetails = ({ bus }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{bus.name}</Card.Title>
        <Card.Text>
          <strong>Source:</strong> {bus.source}
        </Card.Text>
        <Card.Text>
          <strong>Destination:</strong> {bus.destination}
        </Card.Text>
        <Card.Text>
          <strong>Departure:</strong> {bus.departureTime}
        </Card.Text>
        <Card.Text>
          <strong>Arrival:</strong> {bus.arrivalTime}
        </Card.Text>
        <Card.Text>
          <strong>Fare:</strong> {bus.fare}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BusDetails;