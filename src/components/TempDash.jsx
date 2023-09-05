function UnitSwitch() {
  return (
    <div className="container">
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
    </div>
  </div>
  );
}

export function TempDashInfo() {
  return (
    <div className="info-container">
      <div className="location"> Edison, NJ</div>
      <div>
        <div>70&deg;F</div>
        <div>
          <div>Lo: 54&deg;F</div>
          <div>Hi: 74&deg;F</div>
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