import clearNight from "../assets/clear-night.png"

export function TempDashInfo() {
  return (
    <div className="info-container">
      <div className="location"> Edison, United States</div>
      <div className="date h5">Thursday, Sept 7</div>
      <div>
        <div className="temp m-0">70&deg;F</div>
        <div className="container">
          <div className="row w-50">
            <div className="col-5 weather-description p-0">Clear Skies</div><img className = "weather-description-img col-1 img-fluid float-start p-0" src={clearNight} alt="clear-night" />
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
    </div>
  )
}

export default function TempDash() {
  return (
    <>
    <TempDashInfo />
  </>
  )
  
}