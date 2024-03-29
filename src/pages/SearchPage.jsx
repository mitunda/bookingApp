// SearchPage.jsx
import React, { useState } from 'react';
import BusSearch from '../components/BusSearch';
import BusListing from '../components/BusListing';
// import { fetchBuses } from '../services/busService';

// This is the page for searching and listing buses
const SearchPage = () => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleSearch = async (searchData) => {
    const busesData = await fetchBuses(searchData);
    setBuses(busesData);
  };

  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
  };

  return (
    <div>
      <h1>Search Buses</h1>
      <BusSearch onSearch={handleSearch} />
      {buses.length > 0 && <BusListing buses={buses} onSelectBus={handleSelectBus} />}
      {selectedBus && <p>Selected Bus: {selectedBus.name}</p>}
    </div>
  );
};

export default SearchPage;