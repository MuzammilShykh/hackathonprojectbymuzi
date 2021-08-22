import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import "./Header.css"
// import {BsPeopleCircle} from "react-icons/bs";
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Header() {
    return(
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  href="#home">Company Logo </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link style={{marginLeft:"90%",color:"#E8AB16"}} href="#Home">Home</Nav.Link>
      <Nav.Link href="#About Us">About</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      <NavDropdown title="Blog" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Blog with SideBar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Blog without SideBar</NavDropdown.Item>
        
    
      </NavDropdown>
    
    </Nav>
    <Nav>
    <Nav.Link href="#memes">
    <PersonIcon/>
    
      </Nav.Link>
      <Nav.Link href="#memes">
    <SearchIcon/>
    
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <ShoppingBasketIcon/>
      </Nav.Link>
      <Nav.Link eventKey={3} href="#memes">
      <PhoneIcon/> <a style={{color:"#E8AB16"}}>0000-000000-0</a>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>

    )
}