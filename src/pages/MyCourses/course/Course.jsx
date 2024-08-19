import PropTypes from "prop-types";
import {
  CourseWrapper,
  HeaderCourse,
  InfoCousre,
} from "./course.style";

function Course({
  image_1,
  image_2,
  image_3,
  title,
  mentor,
  description,
  weeks,
  level,
}) {
  return (
    <CourseWrapper>
      <HeaderCourse>
        <div className="txt">
          <h3 className="title">{title}</h3>
          <p className="desc">{description}</p>
        </div>
        <button className="btn">View Course</button>
      </HeaderCourse>

      {/* --------------     imgsContainer   --------------------- */}

      <div className="imgsContainer">
        <img src={image_1} alt={title} />
        <img src={image_2} alt={title} />
        <img src={image_3} alt={title} />
      </div>

      <InfoCousre>
        <div className="details">
          <span className="weeks">{weeks} Weeks</span>
          <span className="level">{level}</span>
        </div>
        <h5 className="mentor">By {mentor}</h5>
      </InfoCousre>


    </CourseWrapper>
  );
}


Course.propTypes = {
  image_1: PropTypes.string.isRequired,
  image_2: PropTypes.string.isRequired,
  image_3: PropTypes.string.isRequired,
  mentor: PropTypes.string.isRequired,
  weeks: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Course ;
