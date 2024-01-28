'use client';

import React, { useState } from "react";
import axios from "axios";

function WeatherPage() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const getWeather = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}`;
    try {
      const res = await axios.get(url);
      console.log(res)
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
  };

  const Weath = () => {
    return (
      <div>
        <div className="">
          Weather information for {city}
          <hr />
        </div>
        <div className="">
          <div className="">Weather : {weather.descp}</div>
          <div className="">Temperature : {weather.temp}</div>
          <div className="">Humidity :{weather.humidity} %</div>
          <div className="">Pressure : {weather.press} mb</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="">Weather Info</div>
      <div className="">
        <div className="">
          <form onSubmit={getWeather} className="">
            <input type="text" placeholder="city" name="loc" />
            <button className="">Search</button>
          </form>
          {weather && <Weath />}
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
