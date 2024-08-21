import Title from "../../../component/title/Title";
import { MdOutlineArrowOutward } from "react-icons/md";

const BenefitsSection = () => {
  const benefitsDetails = [
    {
      id: "01",
      title: "Flexible Learning Schedule",
      description:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      id: "02",
      title: "Expert Instruction",
      description:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: "03",
      title: "Diverse Course Offerings",
      description:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: "04",
      title: "Updated Curriculum",
      description:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: "05",
      title: "Practical Projects and Assignments",
      description:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: "06",
      title: "Interactive Learning Environment",
      description:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  return (
    <div className="mb-20">
      <Title
        name={"Benefits"}
        dsc={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
        btnName={"View All"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefitsDetails.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col gap-[30px] justify-between bg-white rounded-xl p-[30px]"
          >
            <div className="ml-auto">
              <span className="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[80px] font-bold">
                {benefit.id}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">{benefit.title}</h3>
              <p className="m-0">{benefit.description}</p>
            </div>
            <MdOutlineArrowOutward
              size={25}
              className="w-[62px] h-[62px] flex justify-center ml-auto items-center p-5 rounded-md text-[#0F54FF] shadow m-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
