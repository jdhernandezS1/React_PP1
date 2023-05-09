import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarPhone } from "../router/dropDownMenu";
import { navPhone, navPc } from "../../css/Header/nav.module.css";
import { NavBarPc } from "../router/menuPc";


const Layout = () => {
  return (
    <>

      <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
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