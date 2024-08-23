import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { lamp, signupImg, apple, blue_FB, google, eye } from "../../assets";
import Button from "../button/Button";
import { LoginLeftWrap } from "./forms.style";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (!values.email || !values.password) {
      setApiError("Please fill in all fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      const response = await axios.post(
        "https://indecoding.frevva.com/api/login",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      localStorage.setItem("authToken", response.data.data.token); // Save the token to localStorage
      login(); // Update authentication state
      toast.success("Successful Login");
      setApiError("");
      navigate("/"); // Redirect to home or any other protected route
    } catch (error) {
      setApiSuccess("");
      if (error.response) {
        toast.error(error.response.data.message || "Login failed.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="my-[50px] md:my-[100px] flex flex-col lg:flex-row gap-16 justify-between">
      <div className="flex-2">
        <div className="mb-20">
          <h2 className="text-[28px] md:text-[38px] font-semibold mb-[6px]">
            Let’s take the leap
          </h2>
          <p className="text-[16px] md:text-[18px]">
            Explore a world of courses, elevate your skills, and achieve your
            dreams
          </p>
        </div>
        <LoginLeftWrap>
          <div className="bg">
            <img src={signupImg} alt="" className="loginImg" />
            <img src={lamp} alt="" className="lamp" />
            <span className="circle"></span>
            <span className="btmCircle"></span>
            <span className="lines absolute -left-[5px] -bottom-[7px] md:-left-[10px] md:-bottom-[14px] -rotate-45 flex flex-col items-end gap-4">
              <span className="w-3 h-[2px] bg-[#0f54ff] block rotate-45"></span>
              <span className="w-6 h-[2px] bg-[#0f54ff] block"></span>
              <span className="w-3 h-[2px] bg-[#0f54ff] block -rotate-45"></span>
            </span>
          </div>
        </LoginLeftWrap>
      </div>
      <div className="xl:min-w-[568px] p-[10px] md:p-[20px] xl:p-[50px] bg-white rounded-xl">
        <div className="mb-[20px] md:md-[30px] lg:mb-[50px] text-center">
          <h2 className="text-[38px] md:text-[48px] font-semibold mb-3">
            Log In
          </h2>
          <p className="text-[16px] md:text-[18px]">
            Your learning journey awaits. Log In now!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="mb-[14px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="bg-[#FCFCFD] p-3 xl:p-6 outline-none border-[1px] border-[#F1F1F3] rounded-[10px]"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="password" className="mb-[14px]">
              Password
            </label>
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

            <span className="text-[16px] md:text-[18px] text-[#EF4444] block ml-auto">
              Forget Password?
            </span>
          </div>
          <div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-[10px]"
              />
              <label htmlFor="remember" className="text-[16px] md:text-[18px]">
                Remember Me
              </label>
            </div>
            <Button
              name={"Login"}
              style={
                "w-full bg-[#0F54FF] text-center py-[12px] lg:py-[18px] text-white mb-6 "
              }
            />
          </div>
          <div className="mb-6 flex items-center gap-2">
            <span className="w-full h-[1px] bg-[#E4E4E7]"></span>
            <span className="text-[#98989A] text-[16px] md:text-[18px]">
              Or
            </span>
            <span className="w-full h-[1px] bg-[#E4E4E7]"></span>
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
          <div className="flex items-center justify-center gap-1 text-[16px] md:text-[18px]">
            <span>Don’t Have An Account?</span>
            <Link to={"signup"} className="text-[#0F54FF] font-semibold">
              Sign Up
            </Link>
          </div>
          {apiError && <p className="text-red-500 text-center">{apiError}</p>}
          {apiSuccess && (
            <p className="text-green-500 text-center">{apiSuccess}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
