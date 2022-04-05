import "./service.css";

import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import { themeContext } from "../../Contest";
import { useContext } from "react";
import { motion } from "framer-motion";
const Service = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="service">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          ex assumenda.
          <br />
          Lorem ipsum dolor sit amet.
        </span>
        <button className="button s-button">Download CV</button>
        <div
          className="blur s-blur1"
          style={{
            background: "#ABF1FF94",
          }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={`Figma,Sketch,Photoshop,
            Adobe, Adobe xd`}
          />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={`Html,CSS,
            Javascript, React,Node,Angular,PHP,Python,`}
          />
        </div>
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={{ duration: 1.5 }}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem.`}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
