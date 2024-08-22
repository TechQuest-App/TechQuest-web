import PropTypes from "prop-types";
import { TestimonialsWrap } from "./testimonials.style";
import Button from "../../../component/button/Button";

function Testimonial({ name, quote, imgSrc }) {
  return (
    <TestimonialsWrap>
      <p className="quote">{quote}</p>
      <div className="imgRow">
        <div className="flex items-center gap-2 mt-[10px]">
          <img src={imgSrc} alt={name} className="image" />
          <h3 className="name">{name}</h3>
        </div>
        <Button
          name="Read Full Story"
          style="py-2 px-3 md:px-5 text-white bg-[#0F54FF]"
        />
      </div>
    </TestimonialsWrap>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Testimonial;
