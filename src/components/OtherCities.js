import React, { useEffect, useState } from "react";
import WeatherDetail from "./WeatherDetail";

const OtherCities = () => {
  const [data, setData] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [error,setError] = useState("")

  const fetchWeatherByLocation = async (location) => {
    try {
      const API_KEY = "7a0883c93ba1de5ed44b70bdf43519cd";
      const API_URL = "https://api.openweathermap.org/data/2.5";

      const response = await fetch(
        `${API_URL}/weather?q=${location}&units=metric&APPID=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Weather data not available");
      }

      const json = await response.json();
      setData(json);

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setData(null);
    }
  };

  useEffect(() => {
    fetchWeatherByLocation("talwara");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeatherByLocation(searchLocation);
    if(searchLocation === ""){
     setError("please enter the city name")
    }
    if (searchLocation !== "") {
      setSearchLocation("");
      setError("")
    }
  }

  return (
    <div className="bg_wrap">
      <h1>Weather Information (Other Cities)</h1>
      <input type="text" onChange={(e) => setSearchLocation(e.target.value)} value={searchLocation} placeholder="enter-city"/>
      <button onClick={handleSearch}>Search</button>
      {error &&(
        <p style={{color: "red"}}>{error}</p>
      )}
      {data && (
        <WeatherDetail data={{ ...data }} />
      )}
    </div>
  );
};

export default OtherCities;
