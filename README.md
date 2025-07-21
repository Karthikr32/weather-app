# Weather Application 
&nbsp; &nbsp; &nbsp; &nbsp; This application is a weather forecast web application built using ReactJS, designed to display current weather data for any city across the globe. The application integrates the OpenWeatherMap API to fetch real-time weather details and features a clean, user-friendly interface with responsive visuals and dynamic background transitions based on weather conditions.

The project was built with a focus on practical front-end development skills such as **API integration, state management, error handling, environment variable security, and conditional rendering**.

# Tech Used: 
- **ReactJS**(with Hooks for state and lifecycle management)
- **Vite** (for fast dev server and project scaffolding)
- **Axios**(for handling HTTP requests)
- **OpenWeatherMap API**
- **Custom Weather Icons and Background Images**
- **CSS** (for styling and responsiveness)
- **.env** Files for API key management


## 1. Cool Features
- The app retrieves live weather data including temperature, humidity, wind speed, and general weather condition using **OpenWeatherMap's Current Weather API**.
The temperature is displayed in Celsius, and the city name is shown dynamically based on the user's search input.

- The temperature is displayed in Celsius, and the city name is shown dynamically based on the user's search input.

## 2. Dynamic Background Based on Weather
- One of the unique elements of this project is the dynamic background change based on the weather condition (e.g., sunny, cloudy, rainy, snowy).
- I created a mapping between weather icon codes provided by the API and background images stored locally in the app.
- This enhances the visual feedback and overall user experience, giving a contextual representation of the weather.

## 3. Search Functionality with Input Validation
- Users can enter any city name into the search field.
- The app validates the input and handles incorrect city names gracefully, preventing API errors.
- A fallback alert is displayed if the entered city is invalid or if the data doesn’t match the city name exactly.

## 4. Secure API Key Management
- The weather API key is stored in a .env file, which is listed in .gitignore to prevent it from being pushed to GitHub.
- This ensures environmental security and avoids exposing sensitive API keys publicly.
- The API key is accessed in the codebase via import.meta.env.VITE_API_KEY using Vite's environment variable support.

## 5. Error Handling and User Feedback 
- If the API call fails (due to network issues or invalid city names), the application displays an appropriate alert message without crashing.
- By making hide the other elements except input field along with an alert message. Which may makes app handles all critical scenarios gracefully to ensure a smooth user experience.


## 6. Responsive and Clean UI
- CSS was used to create a responsive layout that adjusts for various screen sizes.
- A clean, card-based layout is used for presenting weather data, making the application visually appealing and accessible.

## Screenshots
![Image 1](./screenshotsimage1.jpg)
![Image 2](./screenshotsimage2.jpg)
![Image 3](./screenshotsimage3.jpg)
![Error_handling](./screenshotsimage4.jpg)
