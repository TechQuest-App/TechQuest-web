import PropTypes from "prop-types";
import { TestimonialsWrapper } from "./testimonials.style";

function Testimonial({ name, quote, imgSrc }) {
  return (
    <div style={TestimonialsWrapper.testimonial}>
      <p style={TestimonialsWrapper.quote}>{quote}</p>
      <div style={TestimonialsWrapper.imgRow}>
        <img src={imgSrc} alt={name} style={TestimonialsWrapper.image} />
        <h3 style={TestimonialsWrapper.name}>{name}</h3>
        <button style={TestimonialsWrapper.button}>Read Full Story</button>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Testimonial;
