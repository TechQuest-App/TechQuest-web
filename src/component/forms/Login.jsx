import { Link } from "react-router-dom";
import {  loginImg, apple, blue_FB, google } from "../../assets/index";
import Button from "../button/Button";
import { LoginLeftWrap } from "./forms.style";

const Login = () => {
  return (
    <div className="my-[100px] flex flex-col lg:flex-row gap-10 lg:gap-[80px]">
      <div className="flex-1">
        <div className="mb-20">
          <h2 className="text-[20px] md:text-[38px] font-semibold mb-[6px]">
            Let’s take the leap
          </h2>
          <p className="text-[16px] md:text-[18px]">
            Explore a world of courses, elevate your skills, and achieve your
            dreams
          </p>
        </div>
        <LoginLeftWrap>
          <div className="bg">
            <img src={loginImg} alt="" className="loginImg" />
            {/* <img src={lamp} alt="" className="lamp hidden md:block" /> */}
            <span className="circle hidden sm:block"></span>
            <span className="triangle hidden lg:block"></span>
            <span className="lines absolute -left-[10px] -bottom-[14px] -rotate-45 flex flex-col items-end gap-4">
              <span className="w-3 h-[2px] bg-[#0f54ff] block rotate-45"></span>
              <span className="w-6 h-[2px] bg-[#0f54ff] block"></span>
              <span className="w-3 h-[2px] bg-[#0f54ff] block -rotate-45"></span>
            </span>
          </div>
        </LoginLeftWrap>
      </div>
      <div className="flex-1 p-[20px] md:p-[30px] xl:p-[50px] bg-white rounded-xl">
        <div className="mb-[50px] text-center">
          <h2 className="text-[38px] md:text-[48px] font-semibold mb-[6px]">
            Log In
          </h2>
          <p className="text-[16px] md:text-[18px]">
            Your learning journey awaits. Log In now!
          </p>
        </div>
        <form>
          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="mb-[14px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Adress"
              className="bg-[#FCFCFD] p-6 outline-none border-[1px] border-[#F1F1F3] rounded-[10px]"
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="mb-[14px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Password"
              className="bg-[] p-6 outline-none border-[1px] border-[#F1F1F3] rounded-[10px] mb-[14px]"
            />
            <span className="text-[16px] md:text-[18px] text-[#EF4444] block ml-auto">
              Forget Password?
            </span>
          </div>
          <div>
            <div className="mb-6">
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
                "w-full bg-[#0F54FF] text-center py-[18px] px-[20px] text-white mb-6 "
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
              className="w-[54px] h-[54px] md:w-[74px] md:h-[74px] rounded-full p-[10px] bg-[#F5F5F5] flex items-center justify-center"
            >
              <img src={apple} />
            </Link>
            <Link
              to="/google"
              className="w-[54px] h-[54px] md:w-[74px] md:h-[74px] rounded-full p-[10px] bg-[#F5F5F5] flex items-center justify-center"
            >
              <img src={google} />
            </Link>
            <Link
              to="/facebook"
              className="w-[54px] h-[54px] md:w-[74px] md:h-[74px] rounded-full p-[10px] bg-[#F5F5F5] flex items-center justify-center"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
