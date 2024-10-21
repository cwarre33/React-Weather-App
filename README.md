# Weather Dashboard

This project is a weather dashboard application built with React. It was created as a personal project to learn more about full stack development, software engineering principles, and modern web technologies. The application allows users to view weather information for multiple cities, including hourly forecasts and visualizations of temperature, humidity, and precipitation data.

## Features

- **City Selection**: Users can add cities to their dashboard by selecting from a dropdown menu with autocomplete suggestions.
- **Weather Information**: Displays current weather information for selected cities, including temperature, humidity, and precipitation.
- **Hourly Forecast**: Provides an hourly forecast for the selected city.
- **Data Visualization**: Visualizes hourly temperature, humidity, and precipitation data using charts.
- **Dark Mode**: Supports dark mode for better user experience in low-light environments.
- **Responsive Design**: Optimized for mobile and desktop views.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React components for faster and easier web development.
- **Chart.js**: JavaScript library for data visualization.
- **React-Chartjs-2**: React wrapper for Chart.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **GitHub Pages**: Hosting service for deploying the application.

## Learning Goals

This project was undertaken to achieve the following learning goals:

- **Full Stack Development**: Gain hands-on experience with both front-end and back-end development.
- **Software Engineering Principles**: Apply best practices in software design, coding standards, and project management.
- **Modern Web Technologies**: Learn and implement modern web technologies such as React, Material-UI, and Chart.js.
- **API Integration**: Understand how to integrate third-party APIs to fetch and display data dynamically.
- **Responsive Design**: Create a responsive user interface that works seamlessly across different devices and screen sizes.
- **Deployment**: Learn how to deploy a web application to GitHub Pages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Builds the app and deploys it to GitHub Pages. Ensure that the `homepage` field in `package.json` is set to the correct URL.

## Deployment

The application is deployed to GitHub Pages. To deploy the latest version, run:

npm run deploy

Ensure your changes are committed and pushed to GitHub. Then, enable GitHub Pages in the repository settings by selecting the `gh-pages` branch as the source.

You can view the deployed application at: [https://cwarre33.github.io/React-Weather-App](https://cwarre33.github.io/React-Weather-App)

## Project Structure

- **src/components**: Contains the React components for the application, including `WeatherCard`, `HourlyForecast`, `CitySelector`, and `WeatherGraph`.
- **src/App.js**: Main application file that integrates all components and handles state management.
- **src/App.css**: Custom CSS for styling the application.
- **public**: Contains the public assets and the `index.html` file.

## API Integration

The application uses the OpenWeatherMap API to fetch weather data. Ensure you have a valid API key and set it in the environment variables.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License.

---

This project was a great opportunity to deepen my understanding of full stack development and modern web technologies. I hope you find it useful and informative. Thank you for checking it out!