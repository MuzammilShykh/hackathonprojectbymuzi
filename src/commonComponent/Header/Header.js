import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import "./Header.css"
// import {BsPeopleCircle} from "react-icons/bs";
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PhoneIcon from '@material-ui/icons/Phone';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { doLogout } from '../../store/Actions/AuthAction'

import {
  Link, NavLink
} from "react-router-dom";



export default function Header() {


  const dispatch = useDispatch()

  const doUserLogout = () => {
   
    dispatch(doLogout())
  }
 
  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Company Logo | </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              {/* <Nav.Link style={{ marginLeft: "90%", color: "#E8AB16" }}>Home</Nav.Link> */}
              {/* <Nav.Link to="/aboutus">About</Nav.Link> */}

              <NavLink style={{textDecoration:"none",color: "#939597",paddingRight:"10%"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} exact to="/"> Home </NavLink>
              <NavLink style={{textDecoration:"none",color: "#939597",paddingRight:"10%"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} to ="/aboutus"> About </NavLink>
              
              <NavLink  style={{textDecoration:"none",color: "#939597"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} to="/faq"> Help </NavLink> 
             
              {/* <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog with SideBar</NavDropdown.Item>                         
                <NavDropdown.Item href="#action/3.2">Blog without SideBar</NavDropdown.Item>


              </NavDropdown> */}

            </Nav>
            <NavLink style={{textDecoration:"none",color: "#939597",paddingRight:"4%"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} exact to="addrestaurant"> I am a Restaurant </NavLink>
            <Nav>

              {/* <Nav.Link to ="/login"> */}

             

              {authState ? <button style={{ color: "#E8AB16", backgroundColor: "#212529",width:"150px"  }} onClick={doUserLogout}>Logout Now</button> : 
             <NavLink  style={{textDecoration:"none",color: "#E8AB16"}} to="/login"> <button style={{ color: "#E8AB16", backgroundColor: "#212529" ,width:"150px",padding:"5%" }}>  Login  </button></NavLink>}


              {/* </Nav.Link> */}
              <Nav.Link href="#">
                <SearchIcon />

              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <ShoppingBasketIcon />
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                <PhoneIcon /> <a style={{ color: "#E8AB16" }}>0000-000000-0</a>
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}