import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function Header() {
  return (
    <div className="header">
      <PersonIcon />
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
      />

      <QuestionAnswerIcon />
    </div>
  );
}

export default Header;
