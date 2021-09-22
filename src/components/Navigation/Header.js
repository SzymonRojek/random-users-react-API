import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./styles.css";

import Menu from "./Menu";

const Header = () => {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");

  return (
    <div className="header-container">
      <Menu>
        <ul className="header-list">
          <li
          // className={`header-link ${splitLocation[1] === "" ? "active" : ""}`}
          >
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li
          // className={`header-link ${
          //   splitLocation[1] === "users" ? "active" : ""
          // }`}
          >
            <NavLink className="link">Users</NavLink>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default Header;
