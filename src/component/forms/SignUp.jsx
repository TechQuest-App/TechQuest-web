import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SignupWrap } from "./forms.style";
import {
  apple,
  blue_FB,
  calender,
  google,
  ready_cretificate,
  UX_class,
  signupImg,
  eye,
} from "../../assets/index";
import Button from "../button/Button";
import axios from "axios";

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

function SignUp() {
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleShowPassword = () => {
    if (values.password) {
      setShowPassword(!showPassword);
      return;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [id]: value }));

    // Validation
    if (id === "fName" || id === "lName") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: USER_REGEX.test(value) ? "" : "Invalid name",
      }));
    } else if (id === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: EMAIL_REGEX.test(value) ? "" : "Invalid email address",
      }));
    } else if (id === "phone") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: PHONE_REGEX.test(value) ? "" : "Invalid phone number",
      }));
    } else if (id === "password") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: PWD_REGEX.test(value)
          ? ""
          : "Password must include 8-24 characters, with at least one uppercase letter, one number, and one special character.",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (
      Object.values(errors).some((error) => error) ||
      Object.values(values).some((value) => !value)
    ) {
      setApiError("Please correct the errors before submitting.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("f_name", values.fName);
      formData.append("l_name", values.lName);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("phone", values.phone);

      const response = await axios.post(
        "https://indecoding.frevva.com/api/register",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Account created! You can login now!");
      setApiError("");
      setValues({
        fName: "",
        lName: "",
        email: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      setApiSuccess("");
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

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
        <form className="signupForm" onSubmit={handleSubmit}>
          <div className="oneInput flex flex-col lg:flex-row gap-5 w-full">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                id="fName"
                value={values.fName}
              />
              {errors.fName && <p className="text-red-500">{errors.fName}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                id="lName"
                value={values.lName}
              />
              {errors.lName && <p className="text-red-500">{errors.lName}</p>}
            </div>
          </div>
          <div className="oneInput flex flex-col gap-1 w-full">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              id="email"
              value={values.email}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="oneInput flex flex-col gap-1 w-full">
            <label>Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                id="password"
                placeholder="Password"
                className="bg-[#FCFCFD] p-3 xl:p-6 outline-none border border-[#F1F1F3] rounded-lg mb-3.5 pr-10 w-full"
                aria-label="Password"
                onChange={handleChange}
                value={values.password}
              />
              <img
                src={eye}
                alt="Toggle password visibility"
                className="absolute right-3 top-[25px] xl:top-[37px] transform -translate-y-1/2 cursor-pointer"
                onClick={handleShowPassword} // Toggle password visibility
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="oneInput flex flex-col gap-1 w-full">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
              id="phone"
              value={values.phone}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="flex items-center">
            <input
              style={{ marginRight: "12px", fontSize: "24px" }}
              type="checkbox"
            />
            <label>I agree to the terms & conditions</label>
          </div>
          <Button
            name={"Sign Up"}
            style={
              "w-full mt-6 bg-[#0F54FF] text-center py-[12px] lg:py-[18px] text-white mb-6 "
            }
          />
          {apiError && <p className="text-red-500">{apiError}</p>}
          {apiSuccess && <p className="text-green-500">{apiSuccess}</p>}
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
