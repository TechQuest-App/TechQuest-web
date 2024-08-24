import BenefitsSection from "./benefitsSection/BenefitsSection";
import HeroSection from "./heroSection/HeroSection";
import Courses from "/src/pages/home/courses/Courses";
import Testimonials from "./testimonials/Testimonials";
import OurPricing from "./pricing/OurPricing";
import Frequently from "./Frequently/Frequently";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <Courses />
      <Testimonials />
      <Link id="pricing">
        <OurPricing />
      </Link>
      <Frequently />
    </>
  );
}

export default Home;
