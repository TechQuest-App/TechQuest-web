import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

function Curriculum() {
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div className="p-[20px] border-[1px] border-[#F1F1F3]">
      {course.curriculums.map((curriculum) => (
        <>
          <h4 className="p-[10px] border-b-[1px] border-[#F1F1F3] text-[20px] md:text-[22px] font-semibold">
            Curriculum
          </h4>
          <div className="grid grid-cols-5 gap-5">
            <div className="py-[20px] flex flex-col items-center justify-center gap-1 border-[1px] border-[#F1F1F3] bg-[#FCFCFD] rounded-lg">
              <h3 className="text-[30px] md:text-[40px] leading-[30px] md:leading-[40px] lg:text-[50px] font-semibold">
                {curriculum.number}
              </h3>
              <span>{curriculum.title}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

Curriculum.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      curriculums: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};

export default Curriculum;
