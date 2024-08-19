import Title from "../../../component/title/Title";
import OnePlan from "./OnePlan/"
import { PricingWrapper } from "./pricing.style"

function Pricing() {
  return (
    <>
      <Title
        name="Our Pricing"
        dsc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <container style={PricingWrapper}>
        <OnePlan StatusPlan="Free Plan" price="0" />
        <OnePlan StatusPlan="Pro Plan" price="77" />
      </container>
    </>
  );
}

export default Pricing