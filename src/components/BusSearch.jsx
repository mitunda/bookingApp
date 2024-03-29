// BusSearch.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// This component renders a form for searching buses
const BusSearch = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchData = {
      source: formData.get('source'),
      destination: formData.get('destination'),
      date: formData.get('date'),
    };
    onSearch(searchData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="source">
        <Form.Label>Source</Form.Label>
        <Form.Control type="text" placeholder="Enter source" name="source" required />
      </Form.Group>

      <Form.Group controlId="destination">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter destination" name="destination" required />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" name="date" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default BusSearch;