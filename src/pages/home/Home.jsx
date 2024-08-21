import BenefitsSection from "./benefitsSection/BenefitsSection";
import HeroSection from "./heroSection/HeroSection";
import Courses from "/src/pages/home/courses/Courses";
import Testimonials from "./testimonials/Testimonials";
import OurPricing from "./pricing/OurPricing";
import Frequently from "./Frequently/Frequently";

function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <Courses />
      <Testimonials />
      <OurPricing />
      <Frequently />
    </>
  );
}

export default Home;
