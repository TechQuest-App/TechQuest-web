import { Link } from "react-router-dom";
import { FooterWrap } from "./footer.style.js";
import {
  TechQuestLogo,
  mail,
  callPhone,
  location,
  facebook,
  twitter,
  linkedin,
  github,
} from "../../assets/index.js";
function Footer() {
  return (
    <FooterWrap>
      <div className="container mx-auto FooterContainer">
        <div className="col">
          <div className="LogoContainer">
            <img src={TechQuestLogo} alt="TechQuest Logo" />
          </div>
          <div className="connections">
            <Link to="mailto:info@techquest.com" className="connection">
              <img src={mail} alt="Mail" />
              <p>info@techquest.com</p>
            </Link>
            <Link to="tel:+201015501129" className="connection">
              <img src={callPhone} alt="Phone" />
              <p>+201015501129</p>
            </Link>
            <Link to="/" className="connection">
              <img src={location} alt="Location" />
              <p>Anywhere at the World</p>
            </Link>
          </div>
        </div>

        <ul className="Col flex flex-col gap-2">
          <h6 className="headCol mb-2 text-[20px] font-bold">Home</h6>
          <li className="item">Benefits</li>
          <li className="item">Our Courses</li>
          <li className="item">Our Testimonials</li>
          <li className="item">Our FAQ</li>
        </ul>

        <ul className="Col flex flex-col gap-2">
          <h6 className="headCol mb-2 text-[20px] font-bold">About Us</h6>
          <li className="item">Company</li>
          <li className="item">Achievements</li>
          <li className="item">Our Goals</li>
        </ul>

        <div className="ColSocial flex flex-col gap-2">
          <h6 className="headCol mb-2 text-[20px] font-bold">
            Social Profiles
          </h6>
          <div className="iconsSocial flex items-center gap-2">
            <div className="platform w-10 h-10 rounded bg-gray-300 flex justify-center items-center">
              <Link to="/facebook">
                <img src={facebook} alt="Facebook" />
              </Link>
            </div>
            <div className="platform w-10 h-10 rounded bg-gray-300 flex justify-center items-center">
              <Link to="/twitter">
                <img src={twitter} alt="Twitter" />
              </Link>
            </div>
            <div className="platform w-10 h-10 rounded bg-gray-300 flex justify-center items-center">
              <Link to="/linkedin">
                <img src={linkedin} alt="LinkedIn" />
              </Link>
            </div>
            <div className="platform w-10 h-10 rounded bg-gray-300 flex justify-center items-center">
              <Link to="/github">
                <img src={github} alt="GitHub" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="copyRight text-center pt-5 pb-2">
        &copy; 2024 TechQuest. All rights reserved to indecoding TEAM.
      </p>
    </FooterWrap>
  );
}

export default Footer;
