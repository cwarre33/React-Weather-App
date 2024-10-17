import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FaThermometerHalf, FaCloudSun } from 'react-icons/fa';

const WeatherCard = ({ cityData, units, onSelect }) => {
  const { name, main, weather } = cityData;
  const temperature = main.temp;
  const condition = weather[0].description;

  return (
    <Card className="weather-card" onClick={() => onSelect(name)}> {/* Add onClick event */}
      <CardContent>
        <Typography variant="h5" component="h2" className="city-name">
          {name}
        </Typography>
        <Typography variant="h6">
          <FaThermometerHalf /> {temperature}°{units === 'metric' ? 'C' : 'F'}
        </Typography>
        <Typography variant="h6" className="condition">
          <FaCloudSun /> {condition}
        </Typography>
        <Typography variant="h6">Humidity: {main.humidity}%</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

