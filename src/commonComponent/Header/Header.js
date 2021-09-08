import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import "./Header.css"
// import {BsPeopleCircle} from "react-icons/bs";
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PhoneIcon from '@material-ui/icons/Phone';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { doLogout } from '../../store/Actions/AuthAction'

import {
  Link, NavLink
} from "react-router-dom";



export default function Header() {


  const dispatch = useDispatch()

  const doUserLogout = () => {
    console.log("button is workking");
    dispatch(doLogout())
  }

  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Company Logo </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link style={{ marginLeft: "90%", color: "#E8AB16" }}>Home</Nav.Link> */}
              {/* <Nav.Link to="/aboutus">About</Nav.Link> */}

              <NavLink style={{textDecoration:"none",color: "#939597"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} exact to="/"> Home </NavLink>
              <NavLink style={{textDecoration:"none",color: "#939597"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} to="/aboutus"> About </NavLink>
              <NavLink  style={{textDecoration:"none",color: "#939597"}} activeStyle={{fontWeight: "",textDecoration:"none",color: "#E8AB16"}} to="/contact"> Contact </NavLink>
           
              {/* <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog with SideBar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog without SideBar</NavDropdown.Item>


              </NavDropdown> */}

            </Nav>
            <Nav>

              {/* <Nav.Link to ="/login"> */}

              {authState ? <button style={{ color: "#E8AB16", backgroundColor: "#212529" }} onClick={doUserLogout}>Logout Now</button> : <Link to="/login">   <PersonIcon /> </Link>}


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