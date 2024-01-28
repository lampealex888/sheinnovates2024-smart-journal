"use client";

import React, { useState } from "react";
import axios from "axios";

function WeatherPage() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [weatherSuggestion, setWeatherSuggestion] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const getWeather = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}`;
    try {
      const res = await axios.get(url);
      setWeather({
        descp: res.data.current.condition.text,
        temp: res.data.current.temp_f,
        city: res.data.location.name,
        humidity: res.data.current.humidity,
        press: res.data.current.pressure_in,
      });
      setCity(res.data.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    try {
      request =
        "What should I do to prepare for the " +
        weather.descp +
        " in " +
        city +
        "?";
      console.log(request);
      const res = await axios.post("/api/weather", request);
    } catch (error) {
      console.log("Error getting weather suggestion:", error);
    }
  };

  const Weath = () => {
    return (
      <div className="bg-base-300 p-4 rounded-lg my-4">
        <div className="font-bold">Weather information for {city}</div>
        <hr className="my-2" />
        <div className="grid grid-cols-2 gap-2">
          <div className="text-lg">Weather : {weather.descp}</div>
          <div className="text-lg">Temperature : {weather.temp}</div>
          <div className="text-lg">Humidity : {weather.humidity} %</div>
          <div className="text-lg">Pressure : {weather.press} mb</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-lg mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Weather Info</h1>
        <form onSubmit={getWeather} className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            name="loc"
            className="flex-grow input bg-base-200 rounded-lg text-lg"
          />
          <button
            type="submit"
            className="btn btn-info rounded-lg text-lg"
          >
            Search
          </button>
        </form>
        {weather && <Weath />}
      </div>
    </>
  );
}

export default WeatherPage;
