import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <NavLink to="/" activeClassName="active" exact>
        Main
      </NavLink>
      <NavLink to="/user" activeClassName="active">
        Client
      </NavLink>
      <NavLink to="/moto-stats" activeClassName="active">
        Moto
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        Settings
      </NavLink>
    </div>
  );
};

export default SideMenu;
