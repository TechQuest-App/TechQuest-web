import { clock, UiImage } from "../../assets";
import Button from "../../component/button/Button";

const CoursePage = () => {
  const topics = [
    {
      id: 1,
      title: "Introduction to UI/UX Design",
      lessons: [
        {
          name: "Understanding UI/UX Design Principles",
          lessonNum: "Lesson 01",
          duration: "45 Minutes",
        },
        {
          name: "Importance of User-Centered Design",
          lessonNum: "Lesson 02",
          duration: "1 Hour",
        },
        {
          name: "The Role of UI/UX Design in Product Development",
          lessonNum: "Lesson 03",
          duration: "45 Minutes",
        },
      ],
    },
    {
      id: 2,
      title: "User Research and Analysis",
      lessons: [
        {
          name: "Conducting User Research and Interviews",
          lessonNum: "Lesson 01",
          duration: "1 Hour",
        },
        {
          name: "Analyzing User Needs and Behavior",
          lessonNum: "Lesson 02",
          duration: "1 Hour",
        },
        {
          name: "Creating User Personas and Scenarios",
          lessonNum: "Lesson 03",
          duration: "45 Minutes",
        },
      ],
    },
    {
      id: 3,
      title: "Wireframing and Prototyping",
      lessons: [
        {
          name: "Introduction to Wireframing Tools and Techniques",
          lessonNum: "Lesson 01",
          duration: "1 Hour",
        },
        {
          name: "Creating Low-Fidelity Wireframes",
          lessonNum: "Lesson 02",
          duration: "1 Hour",
        },
        {
          name: "Prototyping and Interactive Mockups",
          lessonNum: "Lesson 03",
          duration: "1 Hour",
        },
      ],
    },
    {
      id: 4,
      title: "Visual Design and Branding",
      lessons: [
        {
          name: "Color Theory and Typography in UI Design",
          lessonNum: "Lesson 01",
          duration: "1 Hour",
        },
        {
          name: "Visual Hierarchy and Layout Design",
          lessonNum: "Lesson 02",
          duration: "1 Hour",
        },
        {
          name: "Creating a Strong Brand Identity",
          lessonNum: "Lesson 03",
          duration: "45 Minutes",
        },
      ],
    },
    {
      id: 5,
      title: "Usability Testing and Iteration",
      lessons: [
        {
          name: "Usability Testing Methods and Techniques",
          lessonNum: "Lesson 01",
          duration: "1 Hour",
        },
        {
          name: "Analyzing Usability Test Results",
          lessonNum: "Lesson 02",
          duration: "45 Minutes",
        },
        {
          name: "Iterating and Improving UX Designs",
          lessonNum: "Lesson 03",
          duration: "45 Minutes",
        },
      ],
    },
  ];

  return (
    <div className="my-[50px] md:my-[100px]">
      <div className="my-[10px] md:my-[60px] pb-10 border-b-[1px] border-[#E4E4E7] flex flex-col lg:flex-row gap-3 justify-center xl:justify-between">
        <h2 className="text-[28px] md:text-[38px] xl:text-[48px] mb-1 font-semibold text-center xl:text-left">
          UI/UX Design Course
        </h2>
        <p className="text-[16px] md:text-[18px] font-medium max-w-[700px] text-center lg:text-left">
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </p>
      </div>

      <div>
        <img
          src={UiImage}
          alt=""
          className="w-full h-[400px] md:h-[590px] lg:h-[790px] mb-10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-col gap-[30px] justify-between bg-white rounded-xl p-[30px]"
          >
            <div className="ml-auto">
              <span className="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[80px] font-bold">
                {`0${topic.id}`}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">{topic.title}</h3>
            </div>
            <div>
              <div>
                <div className="flex flex-col gap-5">
                  {topic.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="flex flex-col xl:flex-row items-start xl:items-center justify-between p-3 md:p-5 rounded-lg border-[1px] border-[#F1F1F3] bg-white"
                    >
                      <div className="flex flex-col gap-[6px]">
                        <h4 className="text-[20px] font-medium">
                          {lesson.name}
                        </h4>
                        <span>{lesson.lessonNum}</span>
                      </div>
                      <div className="py-[12px] px-[14px] w-fit xl:w-[170px] flex items-center ml-auto justify-center gap-1 bg-[#F7F7F8] rounded-[6px]">
                        <img src={clock} alt="clock" />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
