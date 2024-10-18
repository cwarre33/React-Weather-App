// App.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// Mock the axios module
jest.mock('axios');

describe('App Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        main: {
          temp: 25,
        },
      },
    });
  });

  test('renders loading state', () => {
    render(<App isDarkMode={false} setIsDarkMode={() => {}} />);
    expect(screen.getByText(/Loading weather data/i)).toBeInTheDocument();
  });

  test('handles error state', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    render(<App isDarkMode={false} setIsDarkMode={() => {}} />);
    
    // wait for error message to appear
    expect(await screen.findByText(/An unexpected error occurred/i)).toBeInTheDocument();
  });

  test('validates city input', () => {
    render(<App isDarkMode={false} setIsDarkMode={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText(/Add a city/i), { target: { value: '' } });
    fireEvent.click(screen.getByText(/Add City/i));
    expect(screen.getByText(/City name cannot be empty/i)).toBeInTheDocument();
  });

  // More tests for other functionalities...
});
