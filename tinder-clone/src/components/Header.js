import React from "react";
import "./Header.css";
import tinder from '../images/tinder.png'
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function Header() {
  return (
    <div className="header">

      <PersonIcon />

      <img
        className="header__logo"
        src={tinder}
        alt="tinder logo"
      />

      <QuestionAnswerIcon />
    </div>
  );
}

export default Header;
