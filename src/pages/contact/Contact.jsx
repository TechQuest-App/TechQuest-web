import { email } from "../../assets";
import Button from "../../component/button/Button";

const Contact = () => {
  return (
    <div className="my-[50px] md:my-[100px] flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col flex-1">
        <div className="mb-[100px]">
          <h2 className="text-[28px] md:text-[38px] xl:text-[48px] mb-1 font-semibold">
            Contact US
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] mb-4 font-medium max-w-[600px]">
            Email , call, or complete the form to learn how TechQuest can solve
            your messaging problem.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium max-w-[600px]">
              TechQuest@gmail.com
            </span>
            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium max-w-[600px]">
              321-22--321
            </span>
            <span className="text-[16px] md:text-[18px] underline lg:text-[20px] font-medium max-w-[600px]">
              <>Customer Support</>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          <div className="p-4 bg-white flex flex-col items-center justify-center text-center rounded-md h-[275px]">
            <h4 className="text-[22px] lg:text-[20px] xl:text-[24px] mb-6 font-medium">
              Customer Support
            </h4>
            <p className="lg:text-[13px] xl:text-[16px]">
              Our support team is available around the clock to address any
              concerns or queries you may have
            </p>
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center text-center rounded-md h-[275px]">
            <h4 className="text-[22px] lg:text-[20px] xl:text-[24px] mb-6 font-medium">
              Feedback
            </h4>
            <p className="lg:text-[13px] xl:text-[16px]">
              We value your feedback and are continuously worknig to improve
              TechQuest. Your input is crucial in shaping the future of
              TuchQuest
            </p>
          </div>
          <div className="p-4 bg-white flex flex-col items-center justify-center text-center rounded-md h-[275px]">
            <h4 className="text-[22px] lg:text-[20px] xl:text-[24px] mb-6 font-medium">
              Media Inquiries
            </h4>
            <p className="lg:text-[13px] xl:text-[16px]">
              For media- related questions or press inquiries, please contact us
              at media@TechquestApp.com
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md p-[30px]">
        <div className="mb-6">
          <h2 className="text-[28px] md:text-[38px] mb-3 xl:text-[48px] font-semibold">
            Get in Touch
          </h2>
          <p className="text-[16px] md:text-[18px] font-medium">
            You can reach us any time
          </p>
        </div>
        <form>
          <div className="flex flex-col md:flex-row items-center md:gap-2 gap-5 mb-6">
            <input
              type="text"
              placeholder="First name"
              className="w-full md:p-4 p-3 rounded-[10px] border-[1px] border-[#F1F1F3] bg-[#FCFCFD] outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full md:p-4 p-3 rounded-[10px] border-[1px] border-[#F1F1F3] bg-[#FCFCFD] outline-none"
            />
          </div>
          <div className="relative">
            <img
              src={email}
              alt=""
              className=" absolute top-[12px] left-[12px] md:top-[16px] md:left-[16px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="pl-12 md:pl-16 md:py-4 p-3 rounded-[10px] border-[1px] border-[#F1F1F3] bg-[#FCFCFD] outline-none w-full mb-6"
            />
          </div>
          <div className="flex items-center mb-6">
            <select className="md:px-4 px-3 h-[50px] md:h-[58px] rounded-l-md border-[1px] border-[#F1F1F3] bg-[#FCFCFD] outline-none">
              <option value="20" defaultValue>
                +20
              </option>
              <option value="50">+50</option>
              <option value="60">+60</option>
              <option value="90">+90</option>
            </select>
            <input
              type="phone"
              placeholder="Phone number"
              className="md:p-4 p-3 rounded-r-md border-[1px] border-[#F1F1F3] bg-[#FCFCFD] outline-none w-full"
            />
          </div>
          <textarea
            placeholder="How we can help?"
            className="w-full h-[177px] md:p-4 p-3 rounded-[10px] border-[1px] border-[#F1F1F3] bg-[#FCFCFD] outline-none resize-none mb-6"
          ></textarea>
          <Button
            name="Send"
            style="bg-[#0F54FF] w-full md:p-4 p-3 text-center text-white mb-6"
          />
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-center">
            By contacting us , you agree to our{" "}
            <span className="text-black font-semibold">
              Terms of <br /> service
            </span>
            and Privacy <span className="text-black font-semibold">Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
