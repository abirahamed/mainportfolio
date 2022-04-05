import Toggle from "../toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll/modules";

function Navbar() {
  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={Navbar}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="service" smooth={true}>
              <li>Service</li>
            </Link>
            <Link spy={true} to="experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="testimonial" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        {/* <button className="button n-button">Contact</button> */}
      </div>
    </div>
  );
}

export default Navbar;
