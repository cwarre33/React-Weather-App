import React, { useState } from 'react';
import { Button, TextField, Chip } from '@mui/material';

const CitySelector = ({ setUserCities, userCities }) => {
  const [newCity, setNewCity] = useState('');

  const handleAddCity = () => {
    if (newCity && !userCities.includes(newCity)) {
      setUserCities([...userCities, newCity]);
      setNewCity('');
    }
  };

  return (
    <div className="city-selector">
      <TextField
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        label="Add City"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleAddCity}>
        Add
      </Button>
      <div className="city-chips">
        {userCities.map((city, index) => (
          <Chip
            key={index}
            label={city}
            onDelete={() => setUserCities(userCities.filter((c) => c !== city))}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySelector;
