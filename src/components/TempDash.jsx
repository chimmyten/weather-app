import { useState, useEffect } from "react";

export function TempDashInfo({ weatherData, fahrenheit }) {

  const date = new Date();
  const localDate = date.toLocaleString("en-US", {
    timeZone: weatherData.location.tz_id,
    weekday: "long",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
    day: "2-digit",
  });
  
  return (
    <div>
      <div className="info-container">
        <div className="location">
          {weatherData.location.name}, {weatherData.location.country}
        </div>
        <div className="date h5">{localDate}</div>
        <div>
          <div className="temp m-0">
            {fahrenheit ? `${weatherData.current.temp_f}\u00B0F` : `${weatherData.current.temp_c}\u00B0C`}
          </div>
          <div className="container">
            <div className="row w-50">
              <div className="col d-flex ps-0">
                <div className="weather-description p-0 pt-1">{weatherData.current.condition.text}</div>
                <img
                  className="weather-description-img img-fluid float-start p-0"
                  src={weatherData.current.condition.icon}
                  alt={weatherData.current.condition.text}
                />
              </div>
            </div>
            <div className="row">
              <div className="col p-0">
                <div className="low-temp">Feels like {weatherData.current.feelslike_f}&deg;F</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TempDash({ weatherData, fahrenheit }) {
  return (
    <>
      <TempDashInfo weatherData={weatherData} fahrenheit={fahrenheit} />
    </>
  );
}
