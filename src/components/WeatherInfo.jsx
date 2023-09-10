export default function WeatherInfo() {
  return (
    <div className="container">
      <div className="row gx-5 mt-5">
        <div className="col container stat-container">
          <div className="row justify-content-center">Precipitation</div>
          <div className="row justify-content-center">30%</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">Humidity</div>
          <div className="row justify-content-center">30%</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">Wind Speed</div>
          <div className="row justify-content-center">30%</div>
        </div>
      </div>
      <div className="row gx-5 mt-3">
        <div className="col container stat-container">
          <div className="row justify-content-center">Sunrise</div>
          <div className="row justify-content-center">30%</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">Sunset</div>
          <div className="row justify-content-center">30%</div>
        </div>
        <div className="col container stat-container">
          <div className="row justify-content-center">UV Index</div>
          <div className="row justify-content-center">30%</div>
        </div>
      </div>
    </div>
  )
}