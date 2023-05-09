import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarPhone } from "../router/dropDownMenu";
import { navPhone, navPc } from "../../css/Header/nav.module.css";
import { NavBarPc } from "../router/menuPc";


const Layout = () => {
  return (
    <>

      <div className={navPc}>
        <NavBarPc />
      </div>
      <div className={navPhone} >
        <NavBarPhone />
      </div>
      <Outlet />
    </>
  )
};

export default Layout;