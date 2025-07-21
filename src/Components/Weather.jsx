import React, { useEffect, useState } from "react";
import "./Weather.css";
import search from "../assets/icons/search.svg";
import cloud from "../assets/icons/cloud.png";
import drizzle from "../assets/icons/drizzle.png";
import humidity from "../assets/icons/humidity.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import wind from "../assets/icons/wind.png";
import clear from "../assets/icons/clear.png";

import sunnyBg from "../assets/images/Clear.jpg";
import cloudBg from "../assets/images/Cloudy.jpg";
import fogBg from "../assets/images/fog.png";
import snowBg from "../assets/images/snow.jpg";
import windBg from "../assets/images/Stormy.jpg";
import clearBg from "../assets/images/Sunny.jpg";
import rainBg from "../assets/images/Rainy.jpg";

import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  const iconsSet = {
    "01d": clear,
    "01n": clear,
    "02d": clear,
    "02n": clear,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": rain,
    "11n": rain,
    "13d": snow,
    "13n": snow,
  };

  const bgIcons = {
    "01d": sunnyBg,
    "01n": sunnyBg,
    "02d": clearBg,
    "02n": clearBg,
    "03d": cloudBg,
    "03n": cloudBg,
    "04d": fogBg,
    "04n": fogBg,
    "09d": rainBg,
    "09n": rainBg,
    "10d": rainBg,
    "10n": rainBg,
    "11d": windBg,
    "11n": windBg,
    "13d": snowBg,
    "13n": snowBg,
  };

  const MyWeatherAPI = async (city) => {
    if (city === "") {
      alert("Must enter the city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
      const response = await axios.get(url);
      const data = response.data;
      const cityName = city.toLowerCase();
      const apiCity = data.name.toLowerCase();

      if (!data || !data.weather || !data.name || cityName != apiCity) {
        alert(city + " not found");
        return;
      }

      setWeather({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        city: data.name,
        weatherIcon: iconsSet[data.weather[0].icon] || clear,
        bgIcon: bgIcons[data.weather[0].icon] || sunnyBg,
      });
    } catch (err) {
      alert("Error in fetching weather data");
    }
    setInput("");
  };

  useEffect(() => {
    MyWeatherAPI("Chennai");
  }, []);

  return (
    <div
      className="outer-container"
      style={{ backgroundImage: weather && weather.bgIcon ? `url(${weather.bgIcon})` : "" }}
    >
      <div className="main-container">
        <div className="input-container">
          <input
            placeholder="Search"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <img src={search} alt="search" onClick={() => MyWeatherAPI(input)} />
        </div>
        {weather ? (
          <>
            <div className="icon-location">
              <img src={weather.weatherIcon} alt="" />
              <span>{weather.temperature}&#176;c</span>
              <p>{weather.city}</p>
            </div>
            <div className="weather-data">
              <div className="data-set">
                <img src={humidity} alt="" />
                <div>
                  <span>{weather.humidity} %</span>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="data-set">
                <img src={wind} alt="" />
                <div>
                  <span>{weather.windSpeed} Km/h</span>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weather;
