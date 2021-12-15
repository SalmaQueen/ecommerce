import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link className="navbar-brand" to="/"><h2>Youth  <em>World</em>  <i className="fa fa-shopping-bag"></i></h2></Link>
       
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    
    </nav>
  );
};

export default Navbar;
