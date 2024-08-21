import { electric } from "../../../assets";
import Button from "../../../component/button/Button";

const HeroSection = () => {
  return (
    <div className="my-16 flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="flex items-center mx-auto relative gap-2 w-fit bg-white rounded-xl p-2 md:p-4 drop-shadow">
          <div className=" absolute -left-[20px] -top-[25px] md:-left-[21px] md:-top-[28px] rotate-45 flex flex-col items-end gap-4">
            <span className="w-3 h-[2px] bg-black block rotate-45"></span>
            <span className="w-6 h-[2px] bg-black block"></span>
            <span className="w-3 h-[2px] bg-black block -rotate-45"></span>
          </div>
          <img
            src={electric}
            className="w-[32px] h-[32px] md:w-[42px] md:h-[42px] lg:w-[62px] lg:h-[62px] p-1 md:p-2 lg:p-4 flex justify-center items-center rounded-[6px] bg-[#E5EEFF]"
          />
          <h1 className="text-[18px] md:text-[30px] lg:text-[48px] font-semibold">
            <span className="text-[#0F54FF]">Unlock</span> Your Creative
            Potential
          </h1>
        </div>
        <h3 className="text-[15px] md:text-[20px] lg:text-[38px] font-medium my-3">
          with Online Design and Development Courses.
        </h3>
        <p className="text-[13px] md:text-[16px] lg:text-[18px] font-normal">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex items-center justify-center gap-3 mt-10">
          <Button
            name="Explore Courses"
            style={
              "bg-[#0F54FF] text-[13px] md:text-[16px] text-white drop-shadow py-2 px-3 md:py-3 md:px-5"
            }
          />
          <Button
            name="View Pricing"
            style={
              "bg-white drop-shadow py-2 px-3 md:py-3 md:px-5 text-[13px] md:text-[16px]"
            }
          />
        </div>
      </div>
      <div className="my-20 w-full">
        <iframe
          className=" relative left-0 top-0 w-full h-[400px] md:h-[590px] lg:h-[790px]"
          src="https://www.youtube.com/embed/xcJtL7QggTI?si=z-lWVfnCyQ5xE2EZ"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;
