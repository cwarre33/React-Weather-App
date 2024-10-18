import React, { useState } from 'react';
import { Button, TextField, Chip, Autocomplete, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';

const CitySelector = ({ setUserCities, userCities }) => {
  const [newCity, setNewCity] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddCity = () => {
    const cityName = newCity ? newCity.trim() : '';
    if (!cityName) {
      setError('Please enter a city name.');
      return;
    }
    if (userCities.map((city) => city.toLowerCase()).includes(cityName.toLowerCase())) {
      setError('City already added.');
      return;
    }
    if (!citySuggestions.includes(cityName)) {
      setError('Please select a city from the suggestions.');
      return;
    }
    setUserCities([...userCities, cityName]);
    setNewCity('');
    setError(null);
  };

  const fetchCitySuggestions = async (query) => {
    if (!query) {
      setCitySuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const cities = response.data.map(
        (city) => `${city.name}, ${city.state ? city.state + ', ' : ''}${city.country}`
      );
      setCitySuggestions(cities);
      setError(null);
    } catch (error) {
      setError('Failed to fetch city suggestions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="city-selector">
      <Autocomplete
        value={newCity}
        onChange={(event, newValue) => setNewCity(newValue || '')}
        onInputChange={(event, value) => {
          setNewCity(value || '');
          fetchCitySuggestions(value);
        }}
        options={citySuggestions}
        renderInput={(params) => (
          <TextField
            {...params}
            value={newCity}
            onChange={(e) => setNewCity(e.target.value || '')}
            label="Add City"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      <Button variant="contained" onClick={handleAddCity} style={{ marginLeft: '10px' }}>
        Add
      </Button>
      {error && (
        <Alert severity="error" style={{ marginTop: '10px' }}>
          {error}
        </Alert>
      )}
      <div className="city-chips">
        {userCities.map((city, index) => (
          <Chip
            key={`${city}-${index}`}
            label={city}
            onDelete={() => setUserCities(userCities.filter((c) => c !== city))}
            style={{ margin: '5px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySelector;