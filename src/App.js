import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CircularProgress, Button, Switch, Select, MenuItem } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import HourlyForecast from './components/HourlyForecast';
import CitySelector from './components/CitySelector';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [averageTemp, setAverageTemp] = useState(null);
  const [units, setUnits] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [userCities, setUserCities] = useState(['London', 'New York', 'Tokyo']);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const responses = await Promise.all(
          userCities.map(city =>
            axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`
            )
          )
        );
    
        const weatherData = responses.map(response => response.data);
        setWeatherData(weatherData);
    
        const avgTemp = weatherData.reduce((acc, city) => acc + city.main.temp, 0) / weatherData.length;
        setAverageTemp(avgTemp);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response ? `Error: ${err.response.data.message}` : 'Network error');
        } else {
          setError('An unexpected error occurred');
        }
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [userCities, units]);

  const handleToggleUnits = () => setUnits(prev => (prev === 'metric' ? 'imperial' : 'metric'));
  const handleToggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleCityChange = (event) => {
    const cityIndex = event.target.value;
    setSelectedCity(weatherData[cityIndex]);
  };
  
  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container maxWidth="md" className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="header">
        <Typography variant="h3" component="h1" className="app-title">
          Weather Dashboard
        </Typography>
        <Button variant="contained" onClick={handleToggleUnits}>
          {units === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
        </Button>
        <Switch checked={isDarkMode} onChange={handleToggleDarkMode} />
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </div>
      <CitySelector setUserCities={setUserCities} userCities={userCities} />
      <div className="weather-cards">
        {weatherData.map((cityData, index) => (
          cityData.main ? (
            <WeatherCard 
              key={`${cityData.name}-${index}`} 
              cityData={cityData} 
              units={units} 
              onSelect={setSelectedCity}
            />
          ) : (
            <div key={`${userCities[index]}-${index}`}>
              <Typography variant="body1">
                Weather data for {userCities[index]} is unavailable. Please select a valid city:
              </Typography>
              <Select
                value={index}
                onChange={handleCityChange}
                displayEmpty
              >
                <MenuItem value="" disabled>Select a city</MenuItem>
                {userCities.map((city, idx) => (
                  <MenuItem key={`${city}-${idx}`} value={idx}>{city}</MenuItem>
                ))}
              </Select>
            </div>
          )
        ))}
      </div>
      {averageTemp && (
        <Card className="average-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Average Temperature: {averageTemp.toFixed(2)}°{units === 'metric' ? 'C' : 'F'}
            </Typography>
          </CardContent>
        </Card>
      )}
      {selectedCity && (
        <HourlyForecast city={selectedCity} units={units} />
      )}
    </Container>
  );
};

export default App;