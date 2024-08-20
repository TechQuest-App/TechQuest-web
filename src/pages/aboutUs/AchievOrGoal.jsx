import PropTypes from "prop-types";
import './about.style'

function AchievOrGoal({ src, desc_achiev, Achievement }) {
  return (

      <div className="achievement">
        <img src={src} alt="tag" />
        <h2 className="h2">{Achievement}</h2>
        <p className="desc_achiev">{desc_achiev}</p>
      </div>

  );
}
AchievOrGoal.propTypes = {
  src: PropTypes.any.isRequired,
  desc_achiev: PropTypes.string.isRequired,
  Achievement: PropTypes.string.isRequired,
};

export default AchievOrGoal;
