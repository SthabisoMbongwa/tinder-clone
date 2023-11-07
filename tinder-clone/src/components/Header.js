import React from "react";
import "./Header.css";
import tinder from '../images/tinder.png'
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function Header() {
  return (
    <div className="header">

      <PersonIcon fontSize="large"/>

      <img
        className="header__logo"
        src={tinder}
        alt="tinder logo"
      />

      <QuestionAnswerIcon fontSize="large"/>
    </div>
  );
}

export default Header;
