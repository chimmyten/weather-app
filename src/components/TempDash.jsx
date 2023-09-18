import { useState, useEffect } from "react";

export function TempDashInfo({ weatherData }) {
  return (
    <div>
      <div className="info-container">
        <div className="location">
          {weatherData.location.name}, {weatherData.location.country}
        </div>
        <div className="date h5">{weatherData.location.localtime}</div>
        <div>
          <div className="temp m-0">{weatherData.current.temp_f}&deg;F</div>
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

export default function TempDash({ weatherData }) {
  return (
    <>
      <TempDashInfo weatherData={weatherData}/>
    </>
  );
}
