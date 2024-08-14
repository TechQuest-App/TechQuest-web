import { styles } from "./header.style.js";
import { Link } from "react-router-dom";
import TechQuestLogo from "../../assets/TechQuest_Logo.png";

function Header() {
  return (
    <>
      <nav style={styles.navbar}>
        <p style={styles.p}>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <div style={styles.wrapper} className="nav-wrapper">
          <div style={styles.left}>
            <Link to="/" className="brandLogo">
              <img src={TechQuestLogo} />
            </Link>
            <ul
              id="nav-mobile"
              style={styles.routing}
              className="right hide-on-med-and-down"
            >
              <li style={styles.itemLink}>
                <Link to="/">Home</Link>
              </li>
              <li style={styles.itemLink}>
                <Link to="/courses">Courses</Link>
              </li>
              <li style={styles.itemLink}>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li style={styles.itemLink}>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li style={styles.itemLink}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div style={styles.buttons} className="btns">
            <button>
              <Link
                to="/signup"
                style={{ padding: "14px 34px", color: "#000" }}
              >
                Sign Up
              </Link>
            </button>
            <button>
              <Link to="/login" style={styles.btn}>
                Log In
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
