import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignupWrap } from "./forms.style";
import {
  apple,
  blue_FB,
  calender,
  google,
  ready_cretificate,
  UX_class,
  signupImg,
} from "../../assets/index";
import Button from "../button/Button";

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

    const intervalId = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SignupWrap>
      <div className="leftsection">
        <div className="title">
          <h2>Embark on a journey of discovery.</h2>
          <p>Explore diverse courses and expand your knowledge horizon</p>
        </div>

        <div>
          <img src={signupImg} alt="" />
          <div className="oneReg1">
            <img className="loginImg" src={calender} alt="Calendar" />
            <div className="txt">
              <h4>250k</h4>
              <h5>Assisted Student</h5>
            </div>
          </div>

          <div className="oneReg2">
            <img src={ready_cretificate} alt="Certificate Ready" />
            <div className="txt">
              <h4>Congratulations</h4>
              <h5>Your certificate is ready</h5>
            </div>
          </div>

          <div className="oneReg3">
            <div className="ingContainer">
              <img src={UX_class} alt="UX Class" />
              <span className="active"></span>
            </div>

            <div className="txt flex flex-col">
              <h4>User Experience Class</h4>
              <h5>Today at : {time}</h5>
              <Button
                name="Join Now"
                style="mt-2 text-[16px] md:text-[20px] text-white font-semibold text-center w-[70%] bg-[#0F54FF] py-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rightsection">
        <div className="text">
          <h2 className="title">Sign Up</h2>
          <p>Begin learning with just a few clicks</p>
        </div>
        <form className="signupForm">
          <div className="oneInput">
            <label>Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="oneInput">
            <label>Email</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="oneInput">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="flex items-center">
            <input
              style={{ marginRight: "12px", fontSize: "24px" }}
              type="checkbox"
            />
            <label>I agree to the terms & conditions</label>
          </div>
          <Button
            name={"Login"}
            style={
              "w-full mt-6 bg-[#0F54FF] text-center py-[12px] lg:py-[18px] text-white mb-6 "
            }
          />
        </form>
        <div className="or">
          <span className="leftLine"></span>
          <p className="OR">OR</p>
          <span className="rightLine"></span>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
          <Link
            to="/apple"
            className="w-[54px] h-[54px] xl:w-[74px] xl:h-[74px] rounded-full p-[10px] bg-[#F5F5F5] flex items-center justify-center"
          >
            <img src={apple} />
          </Link>
          <Link
            to="/google"
            className="w-[54px] h-[54px] xl:w-[74px] xl:h-[74px] rounded-full p-[10px] bg-[#F5F5F5] flex items-center justify-center"
          >
            <img src={google} />
          </Link>
          <Link
            to="/facebook"
            className="w-[54px] h-[54px] xl:w-[74px] xl:h-[74px] rounded-full p-[10px] bg-[#F5F5F5] flex items-center justify-center"
          >
            <img src={blue_FB} />
          </Link>
        </div>
        <p className="text-[16px] md:text-[18px] text-center">
          Already Have An Account?
          <Link to={"login"} className="text-[#0F54FF] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </SignupWrap>
  );
}

export default SignUp;
