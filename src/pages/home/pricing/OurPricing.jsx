import Button from "../../../component/button/Button";
import OnePlan from "./OnePlan/";

function OurPricing() {
  return (
    <>
      <div className="my-10">
        <h2 className="mb-5 md:mb-2 text-5xl font-semibold text-center md:text-left">
          {"Our Pricing"}
        </h2>
        <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
          <p className="md:max-w-[60%] w-full text-center md:text-left">
            {
              "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            }
          </p>
          <div className="bg-white p-3 rounded-xl flex items-center gap-4">
            <Button
              name={"Monthly"}
              style={"py-3 px-5 text-white bg-[#0F54FF] font-medium"}
            />
            <span>Yearly</span>
          </div>
        </div>
      </div>
      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:p-10 bg-white p-5 rounded-xl">
        <OnePlan StatusPlan="Free Plan" price="0" />
        <OnePlan StatusPlan="Pro Plan" price="77" />
      </div>
    </>
  );
}

export default OurPricing;
