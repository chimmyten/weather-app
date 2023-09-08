function UnitSwitch() {
  return (
    <div className="container p-0">
      <div className="d-flex">
          F
        <div className="form-check form-switch ms-2">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">C</label>
        </div>
      </div>
  </div>
  );
}

export function TempDashInfo() {
  return (
    <div className="info-container">
      <div className="location h2"> Edison, United States</div>
      <div className="date h5">Thursday, Sept 7</div>
      <div>
        <div className="h1 m-0">70&deg;F</div>
        <div className="container">
          <div className="row">
            <div className="weather-description p-0 h6">Clear Skies</div>
          </div>
          <div className="row">
            <div className="col-4 p-0">
              <div>Lo: 54&deg;F</div>
            </div>
            <div className="col p-0">
              <div>Hi: 74&deg;F</div>
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
    <UnitSwitch />
    <TempDashInfo />
  </>
  )
  
}