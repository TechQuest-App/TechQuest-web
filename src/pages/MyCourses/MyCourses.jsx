import { CoursesPage, CurriculumContainer, Title } from "./myCourses.style";
import Course from "./course/Course";
import Curriculum from "./course/Curriculum";

function MyCourses() {
  const sampleData = {
    image_1: "https://via.placeholder.com/150",
    image_2: "https://via.placeholder.com/150",
    image_3: "https://via.placeholder.com/150",
    mentor: "John Doe",
    description:
      "Learn the basics of React, including components, state, and props.",
    weeks: 4,
    level: "Beginner",
    crriculum: [
      { number: 1, title: "Introduction to React" },
      { number: 2, title: "Styling with CSS" },
      { number: 3, title: "Introduction to Responsive Design" },
      { number: 4, title: "Design Principles for Web" },
      { number: 5, title: "Building a Basic Website" },
    ],
  };

  // const theLoopOfCurriculum = (course) => {
  //     return sampleData.crriculum.map((item, index) => (
  //         <Course key={index} number={item.number} title={item.title} />
  //         ));
  // }

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
      <br />
      <br />
      <hr />
      <hr />
      <Course
        image_1={sampleData.image_1}
        image_2={sampleData.image_2}
        image_3={sampleData.image_3}
        title={sampleData.description}
        mentor={sampleData.mentor}
        description={sampleData.description}
        weeks={sampleData.weeks}
        level={sampleData.level}
      />
      <CurriculumContainer>
        {sampleData.crriculum.map((item, index) => (
          <Curriculum className="ItemsContainer" key={index}>
            <span className="number">{item.number}</span>
            <span className="title">{item.title}</span>
          </Curriculum>
        ))}
      </CurriculumContainer>
    </CoursesPage>
  );
}

export default MyCourses;
