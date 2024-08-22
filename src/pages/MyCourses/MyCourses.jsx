import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Navigation, Pagination } from "swiper/modules";

import { useDispatch, useSelector } from "react-redux";
import { imgWeb_1, imgWeb_2, imgWeb_3 } from "../../assets";
import { HeaderCourse, ImgContainer } from "./course/course.style";
import { CoursesPage, CourseWrapper } from "./myCourses.style";
import { useEffect } from "react";
import { setCourses } from "../../redux/courses/CoursesSlice";
import { coursesData } from "../../data/coursesData";
import { Link } from "react-router-dom";

function MyCourses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(setCourses(coursesData));
  }, [dispatch]);

  return (
    <CoursesPage>
      <div className="my-[10px] md:my-[60px] pb-10 border-b-[1px] border-[#E4E4E7] flex flex-col lg:flex-row gap-3 justify-center xl:justify-between">
        <h2 className="text-[28px] md:text-[38px] xl:text-[48px] mb-1 font-semibold text-center xl:text-left">
          Online Courses on Design and Development
        </h2>
        <p className="text-[16px] md:text-[18px] font-medium max-w-[700px] text-center lg:text-left">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <CourseWrapper>
        {courses.courses.map((course) => (
          <div className="container" key={course.id}>
            <HeaderCourse>
              <div className="txt" key={course.id}>
                <h3 className="title">{course.title}</h3>
                <p className="description">{course.description}</p>
              </div>
              <Link to="/coursepage">
                <button className="btn">View Course</button>
              </Link>
            </HeaderCourse>

            <ImgContainer>
              <Swiper
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={imgWeb_1} alt="web development" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgWeb_2} alt="web development" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgWeb_3} alt="web development" />
                </SwiperSlide>
              </Swiper>
            </ImgContainer>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-3 mt-4">
              <div className="flex items-center gap-2">
                <div className="weeks py-2 px-3 lg:py-[10px] lg:px-4 border-[1px] border-[#F1F1F3] rounded-lg text-[16px] lg:text-[18]">
                  {course.weeks} Weeks
                </div>
                <div className="level py-2 px-3 lg:py-[10px] lg:px-4 border-[1px] border-[#F1F1F3] rounded-lg text-[16px] lg:text-[18]">
                  Level: {course.level}
                </div>
              </div>
              <div className="mentor text-[16px] lg:text-[18]">
                Mentor: {course.mentor}
              </div>
            </div>

            <div className="p-[20px] border-[1px] border-[#F1F1F3]">
              <h4 className="p-[10px] border-b-[1px] border-[#F1F1F3] text-[20px] md:text-[22px] font-semibold">
                Curriculum
              </h4>
              <Swiper
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {course.curriculums.map((curriculum) => (
                  <SwiperSlide key={curriculum.number}>
                    <div className="p-[20px] w-full h-[160px] text-center flex flex-col items-center justify-center gap-3 border-[1px] border-[#F1F1F3] bg-[#FCFCFD] rounded-lg mt-6">
                      <h3 className="text-[40px] leading-[40px] lg:text-[50px] font-semibold">
                        {curriculum.number}
                      </h3>
                      <span>{curriculum.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </CourseWrapper>
    </CoursesPage>
  );
}

export default MyCourses;
