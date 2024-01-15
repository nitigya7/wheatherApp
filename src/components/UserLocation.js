import React,{ useState,useEffect } from "react";
import WeatherDetail from "./WeatherDetail";
const UserLocation =()=>{
    const [data,setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
    
            console.log("Latitude is:", position.coords.latitude);
            console.log("Longitude is:", position.coords.longitude);
    
            const API_KEY = "7a0883c93ba1de5ed44b70bdf43519cd";
            const API_URL = "https://api.openweathermap.org/data/2.5";
    
            const response = await fetch(
              `${API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${API_KEY}`
            );
            const json = await response.json();
             setData(json)
            
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
    
        fetchWeather();
      }, []);
    return(
        <div>
            <h1>Current Location</h1>
            {
                data &&(
                    <WeatherDetail data = {{...data}}/>
                )
            }
        </div>
    )
}
export default UserLocation;