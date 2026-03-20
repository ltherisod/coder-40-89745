import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';

function NavBarRB() {
    console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img alt ='logo' src='../logo-shop.png' style={{width:'8rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Mas vendidos</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <CartWidgetRI compras={5}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;