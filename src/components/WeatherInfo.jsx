export default function WeatherInfo({ weatherData, fahrenheit }) {

  return (
    <div className="container">
      <div className="row gx-5 mt-5">
        <div className="col container stat-container">
          <div className="row justify-content-center">Visibility</div>
            <div className="row justify-content-center">{fahrenheit ? `${weatherData.current.vis_miles} mi` : `${weatherData.current.vis_km} km`}</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">Humidity</div>
          <div className="row justify-content-center">{weatherData.current.humidity}%</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">Wind Speed</div>
          <div className="row justify-content-center">{fahrenheit ? `${weatherData.current.wind_mph} mph` : `${weatherData.current.wind_kph} kph`}</div>
        </div>
      </div>
      <div className="row gx-5 mt-3">
        <div className="col container stat-container">
          <div className="row justify-content-center">Wind Dir</div>
          <div className="row justify-content-center">{weatherData.current.wind_dir}</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">Cloud Coverage</div>
          <div className="row justify-content-center">{weatherData.current.cloud}%</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">UV Index</div>
          <div className="row justify-content-center">{weatherData.current.uv}</div>
        </div>
      </div>
    </div>
  );
}
