import { useState } from "react";
import { plus, rightArrow, xIcon } from "../../../assets";
import Button from "../../../component/button/Button";

function Frequently() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpenQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const questions = [
    {
      title: "Can I enroll in multiple courses at once?",
    },
    {
      title:
        "Are the courses self-paced or do they have specific start and end dates?",
    },
    {
      title: "Are there any prerequisites for the courses?",
    },
    {
      title: "Can I download the course materials for offline access?",
    },
  ];

  return (
    <div className="my-12 p-[30px] lg:p-[50px] bg-white rounded-xl flex flex-col lg:flex-row gap-20">
      <div>
        <h2 className="text-[28px] md:text-[38px] xl:text-[48px] mb-1 font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-[16px] md:text-[18px] mb-10">
          Still have any questions? Contact our Team via support@skillbridge.com
        </p>
        <Button
          name="See All FAQ’s"
          style="py-4 px-6 text-[18px] border-[1px] border-[#F1F1F3]"
        />
      </div>
      <div className="flex flex-col gap-7 w-full">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-white p-[20px] xl:p-[50px] rounded-md border-[1px] border-[#F1F1F3] flex flex-col gap-10"
          >
            <div
              className={`flex items-center justify-between gap-1 ${
                openIndex === index
                  ? "border-b-[1px] border-[#F1F1F3] pb-7"
                  : ""
              }`}
            >
              <span>{question.title}</span>
              <img
                src={openIndex === index ? xIcon : plus}
                alt="Toggle icon"
                className="w-7 h-7 p-1 cursor-pointer rounded-md grid place-items-center text-[18px] bg-[#E5EEFF]"
                onClick={() => handleOpenQuestion(index)}
              />
            </div>
            {openIndex === index && (
              <>
                <p>
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className="flex items-center justify-between bg-[#F7F7F8] rounded-md p-5">
                  <span>Enrollment Process for Different Courses</span>
                  <img
                    src={rightArrow}
                    alt="Right arrow"
                    className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] p-1 md:p-3 rounded-full bg-white grid place-items-center"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frequently;
