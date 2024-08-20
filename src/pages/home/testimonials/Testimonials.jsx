import { Testimonial_1 } from "../../../assets";
import Title from "../../../component/title/Title";
import Testimonial from "/src/pages/home/testimonials/Testimonial";

function Testimonials() {
  const testimonials = [
    {
      name: "Yoro",
      quote:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      imgSrc: Testimonial_1,
    },
    {
      name: "Ahmed",
      quote:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      imgSrc: Testimonial_1,
    },
    {
      name: "Sami",
      quote:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      imgSrc: Testimonial_1,
    },
    {
      name: "Al",
      quote:
        "I enrolled in the cyber security course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      imgSrc: Testimonial_1,
    },
  ];

  return (
    <div className="my-20">
      <Title
        name="Our Testimonials"
        dsc="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        btnName="View All"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            name={testimonial.name}
            quote={testimonial.quote}
            imgSrc={testimonial.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
