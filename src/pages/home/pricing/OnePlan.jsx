import PropTypes from "prop-types";
import { OnePlanWrapper } from "./pricing.style";

function OnePlan({ StatusPlan, price }) {
   const  features =
        [
            { icon: '✓', text: 'Access to selected free courses.' },
            { icon: '✓', text: 'Limited course materials and resources.' },
            { icon: '✓', text: 'Basic community support.' },
            { icon: '✓', text: 'No certification upon completion.' },
            { icon: '✓', text: 'Ad-supported platform.' },
            { icon: '×', text: 'Access to exclusive Pro Plan community forums.' },
            { icon: '×', text: 'Early access to new courses and updates.' },
        ];
    
  
  const getFeatureStyle = (icon) => {
    if (icon === "×") {
      return { background: "none" };
    }
  };
        
  
  return (
    <>
      <container style={OnePlanWrapper}>
        <h5 style={OnePlanWrapper.StatusPlan}>{StatusPlan}</h5>
        <h1 style={OnePlanWrapper.price}>
          $ {price} <sub style={OnePlanWrapper.price.sub}>/month</sub>
        </h1>
        <div style={OnePlanWrapper.avaibleStatus}>
          <h4 style={OnePlanWrapper.avaibleFeature}>Available Features</h4>
          <ul style={OnePlanWrapper.list}>
            {features.map((feature, index) => (
              <li id="feature" style={OnePlanWrapper.feature} key={index}>
                <span
                  style={{
                    ...OnePlanWrapper.feature.icon,
                    ...getFeatureStyle(feature.icon),
                  }}
                >
                  {feature.icon}
                </span>
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <button style={OnePlanWrapper.btn}>Get Started</button>
      </container>
    </>
  );
}

OnePlan.propTypes = {
  StatusPlan: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default OnePlan;
