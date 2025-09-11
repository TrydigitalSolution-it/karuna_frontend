import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ show, onClose }) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboards" },
    { name: "Articles", path: "/articles" },
    { name: "Reports", path: "/reports" },
    { name: "Institutions", path: "/institution" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ];
  const handleCancelClick=()=>{
    onClose();
  }

  return (
    <>
      {show && <div className="overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${show ? "open" : ""}`}>
          <div className="cancelAside"><i class="fa-solid fa-xmark" onClick={handleCancelClick}></i></div>
        <nav>
          
          <ul className="sidebarMenu">
            {menuItems.map((item, index) => (
              <li key={index} className="sidebarMenu-li">
                <Link to={item.path} onClick={onClose}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
