import PropTypes from "prop-types";
import { CurriculumWrapper } from "./course.style";

function Curriculum({ number, title }) {
  return (
    <CurriculumWrapper>
      <h4 className="CurriculumTitle">Curriculum</h4>
      <div className="ItemsContainer">
        <span className="number">{number}</span>
        <span className="title">{title}</span>
      </div>
    </CurriculumWrapper>
  );
}

Curriculum.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Curriculum;
