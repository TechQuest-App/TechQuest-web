import { Signup } from "./forms.style";
import "./custom.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  apple,
  blue_FB,
  calender,
  google,
  ready_cretificate,
  UX_class,
} from "../../assets/index";

function SignUp() {
  const [time, setTime] = useState(() => {
    const now = new Date();
    let hour = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hour} : ${minutes}`;
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hour = now.getHours().toString().padStart(2, "0");
      let minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hour} : ${minutes}`);
    };

    updateClock(); // Update the clock immediately
    const intervalId = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <container style={Signup}>
      <div style={Signup.leftsection}>
        <div style={Signup.leftsection.title}>
          <h2 style={Signup.leftsection.title.h2}>
            Embark on a journey of discovery.
          </h2>
          <p style={Signup.leftsection.title.p}>
            Explore diverse courses and expand your knowledge horizon
          </p>
        </div>
        <div style={Signup.leftsection.haveImgBG}>
          <div className="oneReg-1" style={Signup.leftsection.oneReg}>
            <img style={Signup.leftsection.oneReg.img} src={calender} />
            <div style={Signup.leftsection.oneReg.txt}>
              <h4>250k</h4>
              <h5>Assisted Student</h5>
            </div>
          </div>
          <div className="oneReg-2" style={Signup.leftsection.oneReg}>
            <img
              style={Signup.leftsection.oneReg.img}
              src={ready_cretificate}
            />
            <div style={Signup.leftsection.txt}>
              <h4>Congratulations</h4>
              <h5>Your certificate is ready</h5>
            </div>
          </div>
          <div className="oneReg-3" style={Signup.leftsection.oneReg}>
            <img src={UX_class} />
            <div style={Signup.leftsection.txt}>
              <h4>User Experience Class</h4>
              <h5>Today at : {time}</h5>
              <button className="btn" style={Signup.rightsection.BTN}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
      <div style={Signup.rightsection}>
        <div style={Signup.rightsection.text}>
          <h2 style={Signup.rightsection.title}>Sign Up</h2>
          <p style={Signup.rightsection.p}>
            Begin learning with just a few clicks
          </p>
        </div>
        <form style={Signup.rightsection.signupForm}>
          <div style={Signup.rightsection.oneInput}>
            <label style={Signup.rightsection.label}>Name</label>
            <input
              style={Signup.rightsection.input}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div style={Signup.rightsection.oneInput}>
            <label style={Signup.rightsection.label}>Email</label>
            <input
              style={Signup.rightsection.input}
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div style={Signup.rightsection.oneInput}>
            <label style={Signup.rightsection.label}>PassWord</label>
            <input
              style={Signup.rightsection.input}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              style={{ marginRight: "12px", fontSize: "24px" }}
              type="checkbox"
            />
            <label style={Signup.rightsection.label}>
              I agree to the terms & conditions
            </label>
          </div>
            <button style={Signup.rightsection.BTN}>Sign Up</button>
        </form>
        <div style={Signup.rightsection.or}>
          <span style={Signup.rightsection.leftLine}></span>
          <p style={Signup.rightsection.OR}>OR</p>
          <span style={Signup.rightsection.rightLine}></span>
        </div>
        <div style={Signup.rightsection.platforms}>
          <Link to="/apple" style={Signup.rightsection.linkApple}>
            <img src={apple} style={Signup.rightsection.icon} />
          </Link>
          <Link to="/google" style={Signup.rightsection.linkGoogle}>
            <img src={google} style={Signup.rightsection.icon} />
          </Link>
          <Link to="/facebook" style={Signup.rightsection.linkFacebook}>
            <img src={blue_FB} style={Signup.rightsection.icon} />
          </Link>
        </div>
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          Already Have An Account?
          <span style={{ color: "blue", fontWeight: "600" }}> Log In </span>
        </p>
      </div>
    </container>
  );
}

export default SignUp;
