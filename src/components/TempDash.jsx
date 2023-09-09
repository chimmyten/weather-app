export function TempDashInfo() {
  return (
    <div className="info-container">
      <div className="location"> Edison, United States</div>
      <div className="date h5">Thursday, Sept 7</div>
      <div>
        <div className="temp m-0">70&deg;F</div>
        <div className="container">
          <div className="row">
            <div className="weather-description p-0">Clear Skies</div>
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