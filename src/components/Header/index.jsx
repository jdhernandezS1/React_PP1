import React, {useState} from "react";
import { GridMovies } from '../Component';
import { Home } from "../pages/Home";
import { moviesTitle, hvrBounceIn } from "../../css/moviesGrid.module.css";
import { barItems, item, navPc, navPhone } from "../../css/Header/nav.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../css/Header/nav.css";
import Dropdown from 'react-bootstrap/Dropdown';

export function NavBarPhone() {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          Menu
        </div>
        <div  className={`dropdown-menu ${open? "active" : "inactive"}`}>
            
          <ul>
          <DropDownItem name={"name"} text={'Home'}/>
          <DropDownItem name={"name"} text={'Movies'}/>
          <DropDownItem name={"name"} text={'About'}/>
          </ul>

        </div>
      </div>
    </div>
  );
}

function DropDownItem(props){
  return(
    <li className="dropdownItem">
      <a className="dropdownItem"> {props.text}</a>
    </li>
  )
}
export function NavBarPc() {
  return (
    <Nav className="me-auto ">
      <ul>
        <li>
        <Nav.Link href="#home" className={item}>Home</Nav.Link>
        </li>

        <li>
        <Nav.Link href="#features" className={item}>Features</Nav.Link>
        </li>

        <li>
        <Nav.Link href="#pricing" className={item}>Pricing</Nav.Link>
        </li>
      </ul>
    </Nav>
  );
}
export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className={barItems}>
          <Navbar.Brand href="#home">
            <span className={moviesTitle + " " + hvrBounceIn} >
              OmeCast
            </span>
          </Navbar.Brand>
          <div  className={navPc}>
          {<NavBarPc />}
          </div>
          <div className={navPhone} >
          {<NavBarPhone />}
          </div>
        </Container>
      </Navbar>
    </>
  );
}
