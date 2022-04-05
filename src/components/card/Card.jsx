import "./card.css";
import { themeContext } from "../../Contest";
import { useContext } from "react";
const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
      <button
        className="c-button"
        style={{ background: darkMode ? "none" : "" }}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;
