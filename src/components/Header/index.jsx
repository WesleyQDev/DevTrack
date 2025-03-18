import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DevTrack</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Criar" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/register">Usuario</NavDropdown.Item>
              <NavDropdown.Item href="#organização">
                Organização
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#novo-projeto">
                Novo projeto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/users">Usuarios</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="https://github.com/Software-Engineering-Stack/" rel="noopener noreferrer" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
