import Button from "../../component/button/Button";
import OnePlan from "../home/pricing/OnePlan";

const Pricing = () => {
  return (
    <div className="my-[50px] md:my-[100px]">
      <div className="my-[10px] md:my-[60px] pb-10 border-b-[1px] border-[#E4E4E7] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <h2 className="text-[28px] md:text-[38px] xl:text-[48px] mb-1 font-semibold">
          Our Pricings
        </h2>
        <p className="text-[16px] md:text-[18px] font-medium max-w-[800px]">
          Welcome to TechQuest's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className="bg-white p-3 rounded-xl flex items-center w-fit mx-auto gap-4">
        <Button
          name={"Monthly"}
          style={"py-3 px-5 text-white bg-[#0F54FF] font-medium"}
        />
        <span>Yearly</span>
      </div>
      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:p-10 bg-white p-5 rounded-xl">
        <OnePlan StatusPlan="Free Plan" price="0" />
        <OnePlan StatusPlan="Pro Plan" price="77" />
      </div>
    </div>
  );
};

export default Pricing;
