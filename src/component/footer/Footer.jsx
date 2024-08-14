import { styles } from "./footer.style.js";
import { Link } from "react-router-dom";
import { Fragment } from "react";
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
    <Fragment style={styles.footer}>
      <div style={styles.Wrapper}>
        <div style={styles.FooterContainer}>
          <div style={styles.leftSection}>
            <div style={styles.LogoContainer}>
              <img src={TechQuestLogo} />
            </div>

            <div style={styles.connections}>
              <Link to="/mail:info@techquest.com" style={styles.connection}>
                <img src={mail} style={styles.connection.img} />
                <p style={styles.connection.p}>info@techquest.com</p>
              </Link>
              <Link to="/phone:+201015501129" style={styles.connection}>
                <img src={callPhone} style={styles.connection.img} />
                <p style={styles.connection.p}>+201015501129</p>
              </Link>
              <Link to="/" style={styles.connection}>
                <img src={location} style={styles.connection.img} />
                <p style={styles.connection.p}>Anywhere at the World</p>
              </Link>
            </div>
          </div>
          <div style={styles.rightSection}>
            <ul style={styles.Col}>
              <h6 style={styles.headCol}>Home</h6>
              <li style={styles.item}>Benfites</li>
              <li style={styles.item}>Our Courses</li>
              <li style={styles.item}>Our Testimonials</li>
              <li style={styles.item}>Our FAQ</li>
            </ul>

            <ul style={styles.Col}>
              <h6 style={styles.headCol}>About Us</h6>
              <li style={styles.item}>Company</li>
              <li style={styles.item}>Achievements</li>
              <li style={styles.item}>Our Goals</li>
            </ul>

            <div style={styles.ColSocial}>
              <h6 style={styles.headCol}>Social Profiles</h6>
              <div style={styles.iconsSocial}>
                <div style={styles.platform}>
                  <Link to="/facebook" style={styles.oneConnection}>
                    <img src={facebook} />
                  </Link>
                </div>
                <div style={styles.platform}>
                  <Link to="/twitter" style={styles.oneConnection}>
                    <img src={twitter} />
                  </Link>
                </div>
                <div style={styles.platform}>
                  <Link to="/linkedin" style={styles.oneConnection}>
                    <img src={linkedin} />
                  </Link>
                </div>
                <div style={styles.platform}>
                  <Link to="/github" style={styles.oneConnection}>
                    <img src={github} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={styles.copyRight}>
          &copy; 2024 TechQuest. All rights reserved to indecoding TEAM.
        </p>
      </div>
    </Fragment>
  );
}

export default Footer;
