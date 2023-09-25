import rain from "../assets/rain.png";

export default function Forecast({ weatherData, fahrenheit }) {
  console.log(weatherData);
  function getDate(dateTime) {
    const dayOfWeek = dateTime.split(" ")[0];
    const date = dateTime.split(" ").slice(1, 3).join(" ");
    return `${dayOfWeek}, ${date}`;
  }
  //forecastday.date_epoch is in GMT, therefore take the localtime_epoch and add 24 hours to get next day and so on
  const displayDate1 = getDate(new Date(weatherData.location.localtime_epoch * 1000 + 86400000).toString());
  const displayDate2 = getDate(new Date(weatherData.location.localtime_epoch * 1000 + 86400000 * 2).toString());
  const displayDate3 = getDate(new Date(weatherData.location.localtime_epoch * 1000 + 86400000 * 3).toString());

  return (
    <div className="container forecast overflow-hidden">
      <div className="row justify-content-center mb-3 forecast-heading">Forecast</div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-3 col-lg-2 border-bottom">{displayDate1}</div>
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
        <div className="col-3 col-lg-2 border-bottom">{displayDate2}</div>
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
        <div className="col-3 col-lg-2 border-bottom">{displayDate3}</div>
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
