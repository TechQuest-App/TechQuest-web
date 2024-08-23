import { OnePlanWrapper } from "./pricing.style";
import Button from "../../../component/button/Button";

function OnePlan({ StatusPlan, price }) {
  const features = [
    { icon: "✓", text: "Access to selected free courses." },
    { icon: "✓", text: "Limited course materials and resources." },
    { icon: "✓", text: "Basic community support." },
    { icon: "✓", text: "No certification upon completion." },
    { icon: "✓", text: "Ad-supported platform." },
    { icon: "×", text: "Access to exclusive Pro Plan community forums." },
    { icon: "×", text: "Early access to new courses and updates." },
  ];

  const getFeatureStyle = (icon) => {
    if (icon === "×") {
      return { background: "none", border: "1px solid #F1F1F3" };
    }
  };

  return (
    <OnePlanWrapper>
      <h5 className="StatusPlan">{StatusPlan}</h5>
      <h1 className="price">
        ${price} <sub>/month</sub>
      </h1>
      <div className="avaibleStatus">
        <h4 className="avaibleFeature">Available Features</h4>
        <ul className="list">
          {features.map((feature, index) => (
            <li className="feature flex items-center gap-1" key={index}>
              <span className="icon" style={getFeatureStyle(feature.icon)}>
                {feature.icon}
              </span>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      <Button
        name="Get Started"
        style="py-3 px-5 bg-[#0F54FF] text-center text-white "
      />
    </OnePlanWrapper>
  );
}

export default OnePlan;
