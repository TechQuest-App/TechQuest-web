import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import TopHeader from "./component/header/TopHeader";
import Home from "./pages/home/Home";
import SignUp from "./component/forms/SignUp";
function App() {
  return (
    <div>
      <TopHeader />
      <div className="container mx-auto px-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
