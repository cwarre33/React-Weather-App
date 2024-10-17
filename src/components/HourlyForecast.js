import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const HourlyForecast = ({ city, units }) => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`
        );
        setHourlyData(response.data.list.slice(0, 12)); // Get next 12 hours
      } catch (err) {
        console.error('Failed to fetch hourly data:', err);
      }
    };
    if (city) fetchHourlyData();
  }, [city, units]);

  return (
    <Card className="hourly-forecast">
      <CardContent>
        <Typography variant="h5">Hourly Forecast for {city}</Typography>
        <div className="hourly-timeline">
          {hourlyData.map((data, index) => (
            <div key={index} className="hourly-item">
              <Typography>{new Date(data.dt * 1000).getHours()}:00</Typography>
              <Typography>{data.main.temp}°{units === 'metric' ? 'C' : 'F'}</Typography>
              <Typography>{data.weather[0].description}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyForecast;
