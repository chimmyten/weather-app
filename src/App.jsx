import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import TempDash from "./components/TempDash.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import Forecast from "./components/Forecast";
import { dividerClasses } from "@mui/material";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Edison&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <div>
          <h1 className="text-center mt-5">Loading...</h1>
        </div>
      ) : (
        <div className="container app-content-container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 ps-5">
              <TempDash weatherData={weatherData} />
            </div>
            <div className="col-md-6 col-lg-5 row align-items-center">
              <WeatherInfo />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <Forecast />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
