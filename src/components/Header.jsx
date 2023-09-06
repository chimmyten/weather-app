import { ReactComponent as HamburgerMenu } from "../assets/hamburger-menu.svg";
import "./components.css";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light container-fluid justify-content-start">
      <div className="mb-0 h1 col-2 col-lg-1 ps-4">
        <HamburgerMenu style={{ width: "35px" }} />
      </div>
      <div className="col-4 col-lg-2 offset-1 search-form-container">
        <form className="form-inline">
          <input className="form-control search-bar mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
      <div className="col-2 col-lg-1 offset-2 offset-lg-6">
        <button className="sign-in-btn">Sign in</button>
      </div>
    </nav>
  );
}
