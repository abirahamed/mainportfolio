import "./floatingdiv.css";

import { themeContext } from "../../Contest";
import { useContext } from "react";
const FloatingDiv = ({ image, text1, text2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div
        className="floatingdiv"
        style={{ color: darkMode ? "var(--black)" : "" }}
      >
        <img src={image} alt="" />
        <span>
          {text1}
          <br />
          {text2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDiv;
