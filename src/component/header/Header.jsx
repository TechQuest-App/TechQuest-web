import { HeaderWrap } from "./header.style.js";
import { Link } from "react-router-dom";
import TechQuestLogo from "../../assets/TechQuest_Logo.png";
import { CgMenu } from "react-icons/cg";
import Button from "../button/Button.jsx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HeaderWrap>
      <nav>
        <div className="left">
          <Link to="/" className="brandLogo">
            <img src={TechQuestLogo} />
          </Link>
          <ul className="navLinks hidden md:flex items-center">
            <li className="itemLink active md:py-[4px] md:px-[8px] lg:py-[14px] lg:px-6">
              <Link to="/">Home</Link>
            </li>
            <li className="itemLink md:py-[4px] md:px-[8px] lg:py-[14px] lg:px-6">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="itemLink md:py-[4px] md:px-[8px] lg:py-[14px] lg:px-6">
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li className="itemLink md:py-[4px] md:px-[8px] lg:py-[14px] lg:px-6">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="itemLink md:py-[4px] md:px-[8px] lg:py-[14px] lg:px-6">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="buttons flex items-center gap-1 md:gap-2 ml-auto mr-3">
          <Button
            name="Sign Up"
            style={
              "py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
            }
          />
          <Button
            name="Login"
            style={
              "bg-[#0F54FF] text-white py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
            }
          />
        </div>

        <div className="sideMenu md:hidden">
          <CgMenu
            size={35}
            onClick={handleMenuToggle}
            className="cursor-pointer"
          />

          <div
            className={`sideMenu fixed top-0 right-0 p-5 w-64 h-full bg-[#f7f7f8] transition-transform duration-300 ${
              menuOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            } z-50 lg:hidden`}
          >
            <IoClose
              className="text-black cursor-pointer"
              size={25}
              onClick={handleMenuToggle}
            />
            <ul className="links lg:hidden flex flex-col items-center justify-center gap-[48px] leading-6 font-medium text-black">
              <Link to={"/"}>
                <li className="text-[18px] font-[500]">Home</li>
              </Link>
              <Link to={"/courses"}>
                <li className="text-[18px] font-[500]">courses</li>
              </Link>
              <Link to={"/aboutUs"}>
                <li className="text-[18px] font-[500]">aboutUs</li>
              </Link>
              <Link to={"/pricing"}>
                <li className="text-[18px] font-[500]">pricing</li>
              </Link>
              <Link to={"/contact"}>
                <li className="text-[18px] font-[500]">contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderWrap>
  );
}

export default Header;
