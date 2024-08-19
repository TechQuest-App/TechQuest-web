import { CoursesCards } from "./courses.style";
import { imgCourse } from "/src/assets/index.js";
import Card from "../../../component/card/Card";
import Title from "../../../component/title/Title";

function Courses() {
  return (
    <>
      <Title
        name="Our Courses"
        dsc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        btnName="View All"
      />
      <CoursesCards>
        {/* {courses.map((course, index) => (
                <Card
                key={index}
                imgCourse={imgCourse}
                numWeeks="10"
                level="Beginner"
                mentor="Ayman Tahe"
                titleCourse="Web Development"
                technologies="HTML, CSS, JavaScript"
                />
            ) )} */}
        <Card
          imgCourse={imgCourse}
          numWeeks={10}
          level="Beginner"
          mentor="Ayman Tahe"
          titleCourse="Web Development"
          technologies="HTML, CSS, JavaScript"
        />
        <Card
          imgCourse={imgCourse}
          numWeeks={10}
          level="Beginner"
          mentor="Ayman Tahe"
          titleCourse="Web Development"
          technologies="HTML, CSS, JavaScript"
        />
        <Card
          imgCourse={imgCourse}
          numWeeks={10}
          level="Beginner"
          mentor="Ayman Tahe"
          titleCourse="Web Development"
          technologies="HTML, CSS, JavaScript"
        />
        <Card
          imgCourse={imgCourse}
          numWeeks={10}
          level="Beginner"
          mentor="Ayman Tahe"
          titleCourse="Web Development"
          technologies="HTML, CSS, JavaScript"
        />
        <Card
          imgCourse={imgCourse}
          numWeeks={10}
          level="Beginner"
          mentor="Ayman Tahe"
          titleCourse="Web Development"
          technologies="HTML, CSS, JavaScript"
        />
        <Card
          imgCourse={imgCourse}
          numWeeks={10}
          level="Beginner"
          mentor="Ayman Tahe"
          titleCourse="Web Development"
          technologies="HTML, CSS, JavaScript"
        />

      </CoursesCards>
    </>
  );
}

export default Courses;
