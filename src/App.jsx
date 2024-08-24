// import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

//-------------------  common  -----------------------
import TopHeader from "./component/header/TopHeader";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

//-------------------  register  -----------------------
import SignUp from "./component/forms/SignUp";
import Login from "./component/forms/Login";

//-------------------  pages  -----------------------
import Home from "./pages/home/Home";
import MyCourses from "./pages/MyCourses/MyCourses";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/aboutUs/AboutUs";
import CoursePage from "./pages/coursePage/CoursePage";
import { AuthProvider } from "./context/AuthContext";
import Notification from "./component/notification/Notification";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);
  return (
    <AuthProvider>
      <TopHeader />
      <div className="container mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
      <Notification />

      {/* Scroll to Top Button */}
      <div
        className="scrollTop"
        onClick={scrollTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          height: "40px",
          width: "40px",
          backgroundColor: "#0F54FF",
          color: "white",
          textAlign: "center",
          borderRadius: "50%",
          cursor: "pointer",
          display: showScroll ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaArrowUp />
      </div>
    </AuthProvider>
  );
}

export default App;
