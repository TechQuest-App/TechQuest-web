import PropTypes from "prop-types";

const Button = ({ name, style }) => {
  return <button className={`block rounded-md ${style}`}>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Button;
