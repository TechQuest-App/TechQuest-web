// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { CgMenu } from "react-icons/cg";
// import { IoClose } from "react-icons/io5";
// import { HeaderWrap } from "./header.style";
// import TechQuestLogo from "../../assets/TechQuest_Logo.png";
// import { BsPerson } from "react-icons/bs";
// import { CiLogout } from "react-icons/ci";
// import { useAuth } from "../../context/AuthContext"; // Import the context for authentication
// import Button from "../button/Button";

// function Header() {
//   const { isAuthenticated, logout } = useAuth(); // Use authentication context
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home"); // State for active nav item

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleNavItemClick = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <HeaderWrap>
//       <nav>
//         <div className="left">
//           <Link to="/" className="brandLogo">
//             <img src={TechQuestLogo} alt="TechQuest Logo" />
//           </Link>
//           <ul className="navLinks hidden md:flex items-center gap-1">
//             <li
//               className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
//                 activeItem === "Home" ? "active" : ""
//               }`}
//               onClick={() => handleNavItemClick("Home")}
//             >
//               <Link to="/">Home</Link>
//             </li>
//             <li
//               className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
//                 activeItem === "Courses" ? "active" : ""
//               }`}
//               onClick={() => handleNavItemClick("Courses")}
//             >
//               <Link to="/courses">Courses</Link>
//             </li>
//             <li
//               className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
//                 activeItem === "About Us" ? "active" : ""
//               }`}
//               onClick={() => handleNavItemClick("About Us")}
//             >
//               <Link to="/aboutUs">About Us</Link>
//             </li>
//             <li
//               className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
//                 activeItem === "Pricing" ? "active" : ""
//               }`}
//               onClick={() => handleNavItemClick("Pricing")}
//             >
//               <Link to="/#pricing">Pricing</Link>
//             </li>
//             <li
//               className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
//                 activeItem === "Contact" ? "active" : ""
//               }`}
//               onClick={() => handleNavItemClick("Contact")}
//             >
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="buttons flex items-center gap-1 md:gap-2 ml-auto mr-3">
//           {!isAuthenticated ? (
//             <>
//               <Link to="signup">
//                 <Button
//                   name="Sign Up"
//                   style={
//                     "hidden md:block py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
//                   }
//                 />
//               </Link>
//               <Link to="login">
//                 <Button
//                   name="Login"
//                   style={
//                     "hidden md:block bg-[#0F54FF] text-white py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
//                   }
//                 />
//               </Link>
//             </>
//           ) : (
//             <div className="flex items-center gap-2">
//               <CiLogout
//                 onClick={logout}
//                 size={24}
//                 className="hidden md:block w-[40px] h-[40px] cursor-pointer rounded-full bg-[#0F54FF] p-2 text-white"
//               />
//               <BsPerson
//                 size={24}
//                 className="hidden md:block w-[40px] h-[40px] cursor-pointer rounded-full bg-[#0F54FF] p-2 text-white"
//               />
//             </div>
//           )}
//         </div>

//         <div className="sideMenu md:hidden">
//           <CgMenu
//             size={35}
//             onClick={handleMenuToggle}
//             aria-label="Menu"
//             className="cursor-pointer"
//           />

//           <div
//             className={`sideMenu fixed top-0 right-0 p-5 w-64 h-full bg-[#f7f7f8] transition-transform duration-300 ${
//               menuOpen
//                 ? "transform translate-x-0"
//                 : "transform translate-x-full"
//             } z-50 lg:hidden`}
//           >
//             <IoClose
//               className="text-black cursor-pointer"
//               size={25}
//               onClick={handleMenuToggle}
//               aria-label="Close Menu"
//             />
//             <ul className="links mt-10 lg:hidden flex flex-col gap-3 items-center justify-center leading-6 font-medium text-black">
//               <Link to="/">
//                 <li
//                   className={`text-[18px] font-[500] ${
//                     activeItem === "Home" ? "active" : ""
//                   }`}
//                   onClick={() => handleNavItemClick("Home")}
//                 >
//                   Home
//                 </li>
//               </Link>
//               <Link to="/courses">
//                 <li
//                   className={`text-[18px] font-[500] ${
//                     activeItem === "Courses" ? "active" : ""
//                   }`}
//                   onClick={() => handleNavItemClick("Courses")}
//                 >
//                   Courses
//                 </li>
//               </Link>
//               <Link to="/aboutUs">
//                 <li
//                   className={`text-[18px] font-[500] ${
//                     activeItem === "About Us" ? "active" : ""
//                   }`}
//                   onClick={() => handleNavItemClick("About Us")}
//                 >
//                   About Us
//                 </li>
//               </Link>
//               <Link to="/#pricing">
//                 <li
//                   className={`text-[18px] font-[500] ${
//                     activeItem === "Pricing" ? "active" : ""
//                   }`}
//                   onClick={() => handleNavItemClick("Pricing")}
//                 >
//                   Pricing
//                 </li>
//               </Link>
//               <Link to="/contact">
//                 <li
//                   className={`text-[18px] font-[500] ${
//                     activeItem === "Contact" ? "active" : ""
//                   }`}
//                   onClick={() => handleNavItemClick("Contact")}
//                 >
//                   Contact
//                 </li>
//               </Link>
//               {!isAuthenticated ? (
//                 <>
//                   <Link to="/signup">
//                     <li
//                       className={`text-[18px] font-[500] ${
//                         activeItem === "Register" ? "active" : ""
//                       }`}
//                       onClick={() => handleNavItemClick("Register")}
//                     >
//                       Register
//                     </li>
//                   </Link>
//                   <Link to="/login">
//                     <li
//                       className={`text-[18px] font-[500] ${
//                         activeItem === "Login" ? "active" : ""
//                       }`}
//                       onClick={() => handleNavItemClick("Login")}
//                     >
//                       Login
//                     </li>
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <li
//                     className={`text-[18px] font-[500] cursor-pointer ${
//                       activeItem === "Profile" ? "active" : ""
//                     }`}
//                     onClick={() => handleNavItemClick("Profile")}
//                   >
//                     Profile
//                   </li>
//                   <li
//                     className="text-[18px] font-[500] cursor-pointer"
//                     onClick={logout}
//                   >
//                     Logout
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </HeaderWrap>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation(); // Get current location
  const activeItem = location.pathname; // Set active item based on route

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
          <ul className="navLinks hidden md:flex items-center gap-1">
            <li
              className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
                activeItem === "/" ? "active" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
                activeItem === "/courses" ? "active" : ""
              }`}
            >
              <Link to="/courses">Courses</Link>
            </li>
            <li
              className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
                activeItem === "/aboutUs" ? "active" : ""
              }`}
            >
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li
              className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
                activeItem === "/pricing" ? "active" : ""
              }`}
            >
              <a href="#pricing">Pricing</a>
            </li>
            <li
              className={`itemLink md:py-[5px] md:px-[10px] lg:py-[14px] lg:px-6 ${
                activeItem === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="buttons flex items-center gap-1 md:gap-2 ml-auto mr-3">
          {!isAuthenticated ? (
            <>
              <Link to="/signup">
                <Button
                  name="Sign Up"
                  style={
                    "hidden md:block py-[5px] px-[10px] md:py-[10px] md:px-[25px] lg:py-[14px] lg:px-[34px]"
                  }
                />
              </Link>
              <Link to="/login">
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
              menuOpen ? "translate-x-0" : "translate-x-full"
            } z-50 lg:hidden`}
          >
            <IoClose
              className="text-black cursor-pointer"
              size={25}
              onClick={handleMenuToggle}
              aria-label="Close Menu"
            />
            <ul className="links mt-10 lg:hidden flex flex-col gap-3 items-center justify-center leading-6 font-medium text-black">
              <Link to="/">
                <li
                  className={`text-[18px] font-[500] ${
                    activeItem === "/" ? "active" : ""
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link to="/courses">
                <li
                  className={`text-[18px] font-[500] ${
                    activeItem === "/courses" ? "active" : ""
                  }`}
                >
                  Courses
                </li>
              </Link>
              <Link to="/aboutUs">
                <li
                  className={`text-[18px] font-[500] ${
                    activeItem === "/aboutUs" ? "active" : ""
                  }`}
                >
                  About Us
                </li>
              </Link>
              <a href="#pricing">
                <li
                  className={`text-[18px] font-[500] ${
                    activeItem === "/pricing" ? "active" : ""
                  }`}
                >
                  Pricing
                </li>
              </a>
              <Link to="/contact">
                <li
                  className={`text-[18px] font-[500] ${
                    activeItem === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </li>
              </Link>
              {!isAuthenticated ? (
                <>
                  <Link to="/signup">
                    <li
                      className={`text-[18px] font-[500] ${
                        activeItem === "/signup" ? "active" : ""
                      }`}
                    >
                      Register
                    </li>
                  </Link>
                  <Link to="/login">
                    <li
                      className={`text-[18px] font-[500] ${
                        activeItem === "/login" ? "active" : ""
                      }`}
                    >
                      Login
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <li
                    className={`text-[18px] font-[500] cursor-pointer ${
                      activeItem === "/profile" ? "active" : ""
                    }`}
                    onClick={() => handleNavItemClick("Profile")}
                  >
                    Profile
                  </li>
                  <li
                    className="text-[18px] font-[500] cursor-pointer"
                    onClick={logout}
                  >
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
