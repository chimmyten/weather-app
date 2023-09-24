import { DatasetLinkedOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";

export function TempDashInfo({ weatherData }) {
  
  function getDateAndTime(dateTime) {
    const dayOfWeek = dateTime.split(" ")[0];
    const date = dateTime.split(" ").slice(1, 3).join(" ");
    const time = dateTime.split(" ")[4].slice(0, 5);
    return `${dayOfWeek}, ${date} ${time}`;
  }
  const displayDate = getDateAndTime(new Date(weatherData.location.localtime_epoch * 1000).toString());

  return (
    <div>
      <div className="info-container">
        <div className="location">
          {weatherData.location.name}, {weatherData.location.country}
        </div>
        <div className="date h5">{displayDate}</div>
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
      <TempDashInfo weatherData={weatherData} />
    </>
  );
}
