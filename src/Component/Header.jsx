import React from "react";
import Icon from "../assets/Icon.svg";

const Header = ({ setshowDashboard, showDashboard }) => {
  const handleClick = () => {
    setshowDashboard(!showDashboard);
  };

  return (
    <header className="headerWrapper">
      <div className="header">
        <div className="nav_logo_text">
          <div className="nav_logo">
            <img src={Icon} alt="Logo" />
          </div>
          <div className="Nav_logo_text">Admin Panel</div>
        </div>
       <div> <i className="fa-solid fa-bars fa-solid-bar-icon" onClick={handleClick}></i></div>
      </div>
    </header>
  );
};

export default Header;
