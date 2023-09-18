import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import TempDash from "./components/TempDash.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import Forecast from "./components/Forecast";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(location) {
    setIsLoading(true);
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=no&alerts=no
    `);
    const data = await response.json();
    setWeatherData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData("Edison");
  }, []);

  return (
    <div className="App">
      <Header fetchData={fetchData} />
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
              <WeatherInfo weatherData={weatherData} />
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
