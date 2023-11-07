import React from "react";
import "./Header.css";
import tinder from "../images/tinder.png";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img className="header__logo" src={tinder} alt="tinder logo" />
      <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
