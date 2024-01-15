import React from "react";

const WeatherDetail = ({data})=>{
    const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather?.[0]?.icon}.png`;

    return(
            <div className="weather_wrapper">
                <h2>Location: {data.name} <span>({data.sys?.country})</span></h2>
                <h4>Temprature: {data.main?.temp}°C</h4>
                <h5>Feels Like: {data.main?.feels_like}°C</h5>
                <p>Weather: {data.weather?.[0]?.description}</p>
                <img src={weatherIconUrl} alt="weatherIcon"/>
                <div className="weather_det">
                    <div className="weather_box">
                      <h3>Humidity</h3>
                       <h5>{data.main?.humidity}%</h5>
                    </div>
                    <div className="weather_box">
                      <h3>Pressure</h3>
                       <h5>{data.main?.pressure}mb</h5>
                    </div>
                    <div className="weather_box">
                      <h3>Wind KMPH</h3>
                       <h5>{data.wind?.speed}mb</h5>
                    </div>
                </div>
            </div>
    )
}
export default WeatherDetail;