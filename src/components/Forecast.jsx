import rain from "../assets/rain.png";

export default function Forecast({ weatherData, fahrenheit }) {
  function getDisplayDate(dateString) {
    const year = dateString.split("-")[0];
    const month = dateString.split("-")[1];
    const day = dateString.split("-")[2];
    const date = new Date(year, month-1, day).toString();

    const dayOfWeek = date.split(" ")[0];
    const monthDay = date.split(" ").slice(1, 3).join(" ");
    return `${dayOfWeek}, ${monthDay}`;
  }

  const day1 = getDisplayDate(weatherData.forecast.forecastday[1].date);
  const day2 = getDisplayDate(weatherData.forecast.forecastday[2].date);
  const day3 = getDisplayDate(weatherData.forecast.forecastday[3].date);
  return (
    <div className="container forecast overflow-hidden">
      <div className="row justify-content-center mb-3 forecast-heading">Forecast</div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-3 col-lg-2 border-bottom">{day1}</div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat p-0">
          Lo:{" "}
          {fahrenheit
            ? `${weatherData.forecast.forecastday[1].day.mintemp_f}\u00B0F`
            : `${weatherData.forecast.forecastday[1].day.mintemp_c}\u00B0C`}
        </div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat p-0">
        Hi:{" "}
          {fahrenheit
            ? `${weatherData.forecast.forecastday[1].day.maxtemp_f}\u00B0F`
            : `${weatherData.forecast.forecastday[1].day.maxtemp_c}\u00B0C`}
        </div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat d-flex">
          <img className="rain-img" src={rain} alt="rain" />
          {weatherData.forecast.forecastday[1].day.daily_chance_of_rain}%
        </div>
      </div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-3 col-lg-2 border-bottom">{day2}</div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat p-0">
        Lo:{" "}
          {fahrenheit
            ? `${weatherData.forecast.forecastday[2].day.mintemp_f}\u00B0F`
            : `${weatherData.forecast.forecastday[2].day.mintemp_c}\u00B0C`}
        </div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat p-0">
        Hi:{" "}
          {fahrenheit
            ? `${weatherData.forecast.forecastday[2].day.maxtemp_f}\u00B0F`
            : `${weatherData.forecast.forecastday[2].day.maxtemp_c}\u00B0C`}
        </div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat d-flex">
          <img className="rain-img" src={rain} alt="rain" />
          {weatherData.forecast.forecastday[2].day.daily_chance_of_rain}%
        </div>
      </div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-3 col-lg-2 border-bottom">{day3}</div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat p-0">
        Lo:{" "}
          {fahrenheit
            ? `${weatherData.forecast.forecastday[3].day.mintemp_f}\u00B0F`
            : `${weatherData.forecast.forecastday[3].day.mintemp_c}\u00B0C`}
        </div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat p-0">
        Hi:{" "}
          {fahrenheit
            ? `${weatherData.forecast.forecastday[3].day.maxtemp_f}\u00B0F`
            : `${weatherData.forecast.forecastday[3].day.maxtemp_c}\u00B0C`}
        </div>
        <div className="col-3 col-lg-2 text-center border-bottom forecast-stat d-flex">
          <img className="rain-img" src={rain} alt="rain" />
          {weatherData.forecast.forecastday[3].day.daily_chance_of_rain}%
        </div>
      </div>
    </div>
  );
}
