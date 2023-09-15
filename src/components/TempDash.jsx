import { useState, useEffect } from "react";

export function TempDashInfo() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Edison&aqi=no`)
      .then((response) => {
        console.log(response.status);
        return response.json()})
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!isLoading && <div className="info-container">
        <div className="location">{weatherData.location.name}, {weatherData.location.country}</div>
        <div className="date h5">{weatherData.location.localtime}</div>
        <div>
          <div className="temp m-0">{weatherData.current.temp_f}&deg;F</div>
          <div className="container">
            <div className="row w-50">
              <div className="col-2 weather-description p-0 pt-1">{weatherData.current.condition.text}</div>
              <img
                className="weather-description-img col-1 img-fluid float-start p-0"
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
              />
            </div>
            <div className="row">
              <div className="col-4 p-0">
                <div className="low-temp">Lo: 54&deg;F</div>
              </div>
              <div className="col p-0">
                <div className="high-temp">Hi: 74&deg;F</div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default function TempDash() {
  return (
    <>
      <TempDashInfo />
    </>
  );
}
