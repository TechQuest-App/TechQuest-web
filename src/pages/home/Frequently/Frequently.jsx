import { FrequentlyWrapper } from "./frequently.style";
import { plus, rightArrow, xx } from "../../../assets";

function Frequently() {
  const questions = [
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
    },

    {
      question: "Are there any prerequisites for the courses?",
    },

    {
      question: "Can I download the course materials for offline access?",
    },
  ];

  return (
    <container style={FrequentlyWrapper}>
      
      <div style={FrequentlyWrapper.side}>
        <h2 style={FrequentlyWrapper.side.title}>Frequently Asked Questions</h2>
        <p style={FrequentlyWrapper.side.p}>
          Still have any questions? Contact our Team via support@skillbridge.com
        </p>
        <button style={FrequentlyWrapper.side.btn}>See All FAQ’s</button>
      </div>

      <div style={FrequentlyWrapper.mainPart}>
        <div style={FrequentlyWrapper.mainPart.upper}>
          <div style={FrequentlyWrapper.mainPart.oneBlock}>
            <p style={FrequentlyWrapper.mainPart.p}>
              Can I enroll in multiple courses at once?
            </p>
            <img src={xx} />
          </div>
          <div style={FrequentlyWrapper.mainPart.oneBlock}>
            <span style={FrequentlyWrapper.mainPart.span}>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </span>
          </div>
          <div style={FrequentlyWrapper.mainPart.oneBlock}>
            <p style={FrequentlyWrapper.mainPart.special}>
              Enrollment Process for Different Courses
            <img src={rightArrow} />
            </p>
          </div>
        </div>

        {questions.map((questions, index) => (
          <div key={index} style={FrequentlyWrapper.mainPart.rowQues}>
            <p style={FrequentlyWrapper.mainPart.question}>
              {questions.question}
            </p>
            <img src={plus} style={FrequentlyWrapper.mainPart.img} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default Frequently;
