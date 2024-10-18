// src/components/WeatherGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherGraph = ({ data, labels, title }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature',
        data: data.temperature,
        borderColor: '#0288d1',
        backgroundColor: 'rgba(2, 136, 209, 0.2)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#0288d1',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#0288d1',
        pointHoverBorderColor: '#fff',
      },
      {
        label: 'Humidity',
        data: data.humidity,
        borderColor: '#66bb6a',
        backgroundColor: 'rgba(102, 187, 106, 0.2)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#66bb6a',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#66bb6a',
        pointHoverBorderColor: '#fff',
      },
      {
        label: 'Precipitation',
        data: data.precipitation,
        borderColor: '#ff7043',
        backgroundColor: 'rgba(255, 112, 67, 0.2)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#ff7043',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ff7043',
        pointHoverBorderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            family: 'Rajdhani',
          },
        },
      },
      tooltip: {
        backgroundColor: '#0288d1',
        titleFont: {
          family: 'Rajdhani',
        },
        bodyFont: {
          family: 'Rajdhani',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Rajdhani',
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Rajdhani',
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default WeatherGraph;