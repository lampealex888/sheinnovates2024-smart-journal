import React from "react";
import { useState } from "react";
import axios from "axios";

function WeatherPage() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  // const apiKey = process.env.WEATHER_API_KEY;
  // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // const apiKey = "0adfa1ef116b49c1b93214506242701";
  const apiKey = process.env.WEATHER_API_KEY;
  

  const getWeather = async (e) => {
    console.log(apiKey);
    console.log("Processenv" + process.env);
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
      descp: res.current.condition.text,
      temp: res.current.temp_f,
      city: res.location.name,
      humidity: res.current.humidity,
      press: res.current.pressure_in,
    });

    setCity(res.data.name);
  };

  const Weath = () => {
    return (
      <div>
        <div className="winfo">
          Weather information for {city}
          <hr></hr>
        </div>
        <div className="Weath">
          <div className="welement">Weather : {weather.descp}</div>
          <div className="welement">Temperature : {weather.temp}</div>
          <div className="welement">Humidity :{weather.humidity} %</div>
          <div className="welement">Pressure : {weather.press} mb</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="weathhead">Weather Info</div>
      <div className="mainweather">
        <div className="weather">
          <form onSubmit={getWeather} className="form">
            <input type="text" placeholder="city" name="loc" />
            <button className="bttn">Search</button>
          </form>

          {weather && <Weath />}
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
