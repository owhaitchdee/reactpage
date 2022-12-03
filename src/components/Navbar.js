import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/header.png';
import Button from 'react-bootstrap/Button';
// import FormModal from './Modal';
import { LinkContainer } from "react-router-bootstrap";

function NavbarD(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{height:'60px',paddingLeft:'3%',paddingRight:'3%', fontSize:'.9rem'}}>
        <LinkContainer to="/reactpage" fluid>
          <Navbar.Brand><img src={Logo} alt='logo' style={{height:'40px',paddingRight:'10px',verticalAlign:'middle'}} /> 
          </Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item to="https://owhaitchdee.github.io/Furlinks_UI/">Furlinks</NavDropdown.Item>
                <NavDropdown.Item to="https://owhaitchdee.github.io/taalbatangas/">
                  Taal Batangas
                </NavDropdown.Item>
                <NavDropdown.Item to="http://kabataan.ph">Kabataan PH</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="https://gelogabz.github.io/WD20P-Mini-Project-2/">
                  LEAVENOTHING.ORG
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <div className="float-end">
                <span style={{padding:'5px'}}></span>
                <Button className='btn btn-primary'>Register
                </Button>        
              </div>
          </Navbar.Collapse>
      </Navbar>

    )
}

export default NavbarD;