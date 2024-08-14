import { HeaderWrap } from "./header.style.js";
import { Link } from "react-router-dom";
import TechQuestLogo from "../../assets/TechQuest_Logo.png";

function Header() {
  return (
    <HeaderWrap>
      <nav>
        <div className="left">
          <Link to="/" className="brandLogo">
            <img src={TechQuestLogo} />
          </Link>
          <ul id="nav-mobile" className="navLinks hide-on-med-and-down">
            <li className="itemLink active">
              <Link to="/">Home</Link>
            </li>
            <li className="itemLink">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="itemLink">
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li className="itemLink">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="itemLink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
          <button>
            <Link className="login" to="/login">
              Log In
            </Link>
          </button>
        </div>
      </nav>
    </HeaderWrap>
  );
}

export default Header;
