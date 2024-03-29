// BusListing.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

// This component renders a list of buses
const BusListing = ({ buses, onSelectBus }) => {
  return (
    <div>
      {buses.map((bus) => (
        <Card key={bus.id} className="mb-3">
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
            <Button variant="primary" onClick={() => onSelectBus(bus)}>
              Book Now
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BusListing;