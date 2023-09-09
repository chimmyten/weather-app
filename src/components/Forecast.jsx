export default function Forecast() {
  return (
    <div className="container forecast overflow-hidden">
      <div className="row justify-content-center mb-3 forecast-heading">Forecast</div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-2 border-bottom">Friday, Sept 8</div>
        <div className="col-1 text-center border-bottom forecast-stat p-0">Lo: 75&deg;F</div>
        <div className="col-1 text-center border-bottom forecast-stat p-0">Hi: 85&deg;F</div>
        <div className="col-1 text-center border-bottom forecast-stat">50%</div>
      </div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-2 border-bottom">Saturday, Sept 9</div>
        <div className="col-1 text-center border-bottom forecast-stat p-0">Lo: 75&deg;F</div>
        <div className="col-1 text-center border-bottom forecast-stat p-0">Hi: 85&deg;F</div>
        <div className="col-1 text-center border-bottom forecast-stat">50%</div>
      </div>
      <div className="row justify-content-center pb-2 gx-5">
        <div className="col-2 border-bottom">Sunday, Sept 10</div>
        <div className="col-1 text-center border-bottom forecast-stat p-0">Lo: 75&deg;F</div>
        <div className="col-1 text-center border-bottom forecast-stat p-0">Hi: 85&deg;F</div>
        <div className="col-1 text-center border-bottom forecast-stat">50%</div>
      </div>
    </div>
  );
}
