import {
  AboutWrapper,
  AchievsOurGoals,
  BottomAbout,
  Title,
  TitleAchievOrGoal,
} from "./about.style";
import {
  tag,
  award,
  feedback,
  industry,
  provide,
  foster,
  promote,
  stayAhead,
} from "../../assets/index";
import AchievOrGoal from "/src/pages/aboutUs/AchievOrGoal";

function AboutUs() {

  const Achievements = [
    {
      icon: tag,
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      icon: award,
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      icon: feedback,
      title: "Positive Student Feedback",
      description:
        "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      icon: industry,
      title: "Industry Partnerships",
      description:
        "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
  ];
  const Goals = [
    {
      icon: provide ,
      title: "Provide Practical Skills",
      description:
        "We focus on delivering practical skills that are relevant to the current Industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      icon: foster ,
      title: "Foster Creative Problem-Solving",
      description:
        "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },
    {
      icon:promote,
      title: "Promote Collaboration and Community",
      description:
        "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
      icon: stayAhead ,
      title: "Stay Ahead of the Curve",
      description:
        "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ];


  return (
    <AboutWrapper>
      <Title>
        <h2 className="h2">About TechQuest</h2>
        <p className="p">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </Title>

      <AchievsOurGoals>
        <TitleAchievOrGoal>
          <h2 className="h2">Achievements</h2>
          <p className="p">
            Our commitment to excellence has led us to achieve significant
            milestones along our journey. Here are some of our notable
            achievements
          </p>
        </TitleAchievOrGoal>
        <div className="container">
          {Achievements.map((achievement, index) => (
            <AchievOrGoal
              className="achievOrGoal"
              key={index}
              src={achievement.icon}
              Achievement={achievement.title}
              desc_achiev={achievement.description}
            />
          ))}
        </div>
      </AchievsOurGoals>

      <AchievsOurGoals>
        <TitleAchievOrGoal>
          <h2 className="h2">Our Goals</h2>
          <p className="p">
            At TechQuest, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact. Through our carefully crafted courses, we aim to
          </p>
        </TitleAchievOrGoal>
        <div className="container">
          {Goals.map((Goal, index) => (
            <AchievOrGoal
              className="achievOrGoal"
              key={index}
              src={Goal.icon}
              Achievement={Goal.title}
              desc_achiev={Goal.description}
            />
          ))}
        </div>
      </AchievsOurGoals>

      <BottomAbout>
        <div className="text">
          <h2>
            <span>Together</span>, letُs shape the future of digital innovation
          </h2>
          <p>
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <button>Join Now</button>
      </BottomAbout>
    </AboutWrapper>
  );
}

export default AboutUs;
