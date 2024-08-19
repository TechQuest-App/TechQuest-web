import BenefitsSection from "./benefitsSection/BenefitsSection";
import HeroSection from "./heroSection/HeroSection";
import Courses from '/src/pages/home/courses/Courses'
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";
import Frequently from "./Frequently/Frequently";

function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <Courses />
      <Testimonials />
      <Pricing />
      <Frequently />
    </>
  );
}

export default Home;
