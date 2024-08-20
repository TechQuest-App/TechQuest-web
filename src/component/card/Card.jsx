import PropTypes from "prop-types";
import { CourseCard } from "../../component/card/card.style";
import Button from "../button/Button";

function Card({
  imgCourse,
  numWeeks,
  level,
  mentor,
  titleCourse,
  technologies,
}) {
  return (
    <CourseCard>
      <div className="uppper">
        <img src={imgCourse} alt="Course Image" />
        <div className="dataCourse">
          <div className="flex items-center gap-5 lg:gap-3">
            <p className="weeks">{numWeeks} Weeks</p>
            <p className="level">{level}</p>
          </div>
          <h5 className="mentor">By {mentor}</h5>
        </div>
      </div>
      <div className="txt">
        <h4 className="title">{titleCourse}</h4>
        <p className="desc">
          Learn the basics of {titleCourse} and build your first
          project,including {technologies} Develop the skills to create visually
          appealing and user-friendly websites.
        </p>
      </div>
      <Button
        name="Enroll Now"
        style="bg-blue-600 text-white w-full p-2 mt-3"
      />
    </CourseCard>
  );
}

Card.propTypes = {
  imgCourse: PropTypes.string.isRequired,
  numWeeks: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  mentor: PropTypes.string.isRequired,
  titleCourse: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
};
export default Card;
