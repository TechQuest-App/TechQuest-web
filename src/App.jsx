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

// // Lazy-loaded components
// const Home = lazy(() => import('./Home'));
// const SignUp = lazy(() => import('./SignUp'));
// const Login = lazy(() => import('./Login'));
// const MyCourses = lazy(() => import('./MyCourses'));
// const NotFound = lazy(() => import('./NotFound'));

// // A higher-order component for protected routes
// const ProtectedRoute = ({ element, isAuthenticated }) => {
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

function App() {
  return (
    <div>
      <TopHeader />
      <div className="container mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
