import "./components.css";

function UnitSwitch({ setUnit }) {
  function handleClick(e) {
    setUnit(e);
  }
  return (
    <div className="container p-0">
      <div className="d-flex">
        F/mi
        <div className="form-check form-switch ms-2">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleClick} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            C/km
          </label>
        </div>
      </div>
    </div>
  );
}

export default function Header({ fetchData, setUnit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector(".search-bar");
    const inputVal = input.value;
    fetchData(inputVal);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid justify-content-start">
      <div className="mb-0 h1 col-2 col-lg-1 ps-md-4">
        {/* <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                New York, United States
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                San Francisco, United States
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Seattle, United States
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="col-4 col-lg-2 offset-1 search-form-container">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input className="form-control search-bar mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
      <div className="col-1 ms-4">
        <UnitSwitch setUnit={setUnit}/>
      </div>
      <div className="col-2 col-lg-1 offset-1 offset-lg-5">
        {/* <button className="sign-in-btn">Sign in</button> */}
      </div>
    </nav>
  );
}
