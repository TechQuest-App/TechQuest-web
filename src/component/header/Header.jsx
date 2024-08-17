import { HeaderWrap } from "./header.style.js";
import { Link } from "react-router-dom";
import TechQuestLogo from "../../assets/TechQuest_Logo.png";
import Button from "../button/Button.jsx";

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
        <div className="buttons flex items-center gap-2">
          <Button name="Sign Up" style={"py-2 px-7"} />
          <Button name="Login" style={"bg-[#0F54FF] text-white py-3 px-7"} />
        </div>
      </nav>
    </HeaderWrap>
  );
}

export default Header;
