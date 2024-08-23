// src/component/header/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { HeaderWrap } from "./header.style";
import TechQuestLogo from "../../assets/TechQuest_Logo.png";
import { BsPerson } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../context/AuthContext"; // Import the context for authentication
import Button from "../button/Button";

function Header() {
  const { isAuthenticated, logout } = useAuth(); // Use authentication context
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrap>
      <nav>
        <div className="left">
          <Link to="/" className="brandLogo">
            <img src={TechQuestLogo} alt="TechQuest Logo" />
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
          {!isAuthenticated ? (
            <>
              <Link to="signup">
                <Button
                  name="Sign Up"
                  style={
                    "hidden md:block py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
                  }
                />
              </Link>
              <Link to="login">
                <Button
                  name="Login"
                  style={
                    "hidden md:block bg-[#0F54FF] text-white py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
                  }
                />
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <CiLogout
                onClick={logout}
                size={24}
                className="hidden md:block w-[40px] h-[40px] cursor-pointer rounded-full bg-[#0F54FF] p-2 text-white"
              />
              <BsPerson
                size={24}
                className="hidden md:block w-[40px] h-[40px] cursor-pointer rounded-full bg-[#0F54FF] p-2 text-white"
              />
            </div>
          )}
        </div>

        <div className="sideMenu md:hidden">
          <CgMenu
            size={35}
            onClick={handleMenuToggle}
            aria-label="Menu"
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
              aria-label="Close Menu"
            />
            <ul className="links lg:hidden flex flex-col items-center justify-center gap-[48px] leading-6 font-medium text-black">
              <Link to="/">
                <li className="text-[18px] font-[500]">Home</li>
              </Link>
              <Link to="/courses">
                <li className="text-[18px] font-[500]">Courses</li>
              </Link>
              <Link to="/aboutUs">
                <li className="text-[18px] font-[500]">About Us</li>
              </Link>
              <Link to="/pricing">
                <li className="text-[18px] font-[500]">Pricing</li>
              </Link>
              <Link to="/contact">
                <li className="text-[18px] font-[500]">Contact</li>
              </Link>
              {!isAuthenticated ? (
                <>
                  <Link to="/signup">
                    <li className="text-[18px] font-[500]">Register</li>
                  </Link>
                  <Link to="/login">
                    <li className="text-[18px] font-[500]">Login</li>
                  </Link>
                </>
              ) : (
                <>
                  <li className="text-[18px] font-[500]">Profile</li>
                  <li className="text-[18px] font-[500]" onClick={logout}>
                    Logout
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </HeaderWrap>
  );
}

export default Header;
