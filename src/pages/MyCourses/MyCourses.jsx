import { imgWeb_1, imgWeb_2, imgWeb_3 } from "../../assets";
import { HeaderCourse, ImgContainer, InfoCousre } from "./course/course.style";
import {
  CoursesPage,
  CourseWrapper,
  CurriculumContainer,
  Title,
} from "./myCourses.style";
// import Course from "./course/Course";
// import Curriculum from "./course/Curriculum";
// import { useState } from "react";

function MyCourses() {
  // const [curriculum, setCurriculum] = useState([]);
  const courses = [
    {
      id: 1,
      category: "web",
      image: "https://via.placeholder.com/150",
      title: "Web Development Fundamentals",
      mentor: "John Doe",
      description:
        "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
      weeks: 8,
      level: "Beginner",
    },
    {
      id: 2,
      category: "UI",
      image: "https://via.placeholder.com/150",
      title: "UI/UX Design for Beginners",
      mentor: "Jane Doe",
      description:
        "Dive into the world of UI/UX design and learn how to create user-friendly and visually appealing interfaces.",
      weeks: 6,
      level: "Beginner",
    },
    {
      id: 3,
      category: "front-end",
      image: "https://via.placeholder.com/150",
      title: "Advanced Front-End Development",
      mentor: "Bob Smith",
      description:
        "Master advanced front-end techniques, including React, Angular, and Vue.js.",
      weeks: 12,
      level: "Intermediate",
    },
    {
      id: 4,
      category: "graphic-design",
      image: "https://via.placeholder.com/150",
      title: "Graphic Design for Print and Digital",
      mentor: "Alice Jones",
      description:
        "Learn to create stunning visual designs for both print and digital media.",
      weeks: 10,
      level: "Intermediate",
    },
    {
      id: 5,
      category: "HTML",
      image: "https://via.placeholder.com/150",
      title: "HTML5 and CSS3 Mastery",
      mentor: "David Lee",
      description:
        "Master the latest HTML5 and CSS3 features to build responsive and engaging websites.",
      weeks: 4,
      level: "Beginner",
    },
  ];

  const curriculum = {
    web: [
      { number: 1, title: "Learn, Setup & Testing" },
      { number: 2, title: "Frontend Development" },
      { number: 3, title: "Responsive Design" },
      { number: 4, title: "Design Principles for Web" },
      { number: 5, title: "Building a Basic Website" },
    ],
    UI: [
      { number: 1, title: "Intro to UX, UI, Design & Prototyping" },
      { number: 2, title: "UI Design Tools & Workflow" },
      { number: 3, title: "UI Design Principles & Best Practices" },
      { number: 4, title: "Creating User Interfaces" },
      { number: 5, title: "UI Design Portfolio" },
    ],
    "front-end": [
      { number: 1, title: "Learn, Setup & Testing" },
      { number: 2, title: "HTML & CSS Foundations" },
      { number: 3, title: "Javascript & Libraries" },
      { number: 4, title: "Design Principles for Web" },
      { number: 5, title: "Building a Basic Website" },
    ],
    "graphic-design": [
      { number: 1, title: "Design Tools & Workflow" },
      { number: 2, title: "Visual Communication & Typography" },
      { number: 3, title: "Graphic Design Principles & Best Practices" },
      { number: 4, title: "Branding & Identity Design" },
      { number: 5, title: "Graphic Design Portfolio" },
    ],
    HTML: [
      { number: 1, title: "Introduction to HTML" },
      { number: 2, title: "HTML Structure & Semantics" },
      { number: 3, title: "HTML Forms & Interactivity" },
      { number: 4, title: "Advanced HTML Concepts" },
      { number: 5, title: "HTML5 and Beyond" },
    ],
  };

  return (
    <CoursesPage>
      <Title>
        <h2 className="h2">Online Courses on Design and Development</h2>
        <p className="p">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </Title>
      <CourseWrapper>
        {courses.map((course) => (
          <div className="container" key={course.id}>
            <HeaderCourse>
              <div className="txt" key={course.id}>
                <h3 className="title">{course.title}</h3>
                <p className="description">{course.description}</p>
              </div>
              <button className="btn">View Course</button>
            </HeaderCourse>

            <ImgContainer>
              <img src={imgWeb_1} alt="web development" />
              <img src={imgWeb_2} alt="web development" />
              <img src={imgWeb_3} alt="web development" />
            </ImgContainer>

            <InfoCousre>
              <div className="weeks">{course.weeks} Weeks</div>
              <div className="level">Level: {course.level}</div>
              <div className="mentor">Mentor: {course.mentor}</div>
            </InfoCousre>

            <CurriculumContainer>
              {/* <h3>{course.category}</h3> */}
              <h2 className="curriculumTitle">Curriculum</h2>
              <div className="contant">
                {curriculum[course.category].map((item) => (
                  <div key={item.number}>
                    <div className="number">{item.number}</div>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
            </CurriculumContainer>
          </div>
        ))}
      </CourseWrapper>
    </CoursesPage>
  );
}

export default MyCourses;
