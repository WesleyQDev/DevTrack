import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../../provider/authProvider";

export function Header() {
  const { token } = useAuth();
  let user = token;

  return (
    <Navbar collapseOnSelect bg="dark" fixed="top" expand="lg" className="w-100">
      <Container >
        <Navbar.Brand href="/">DevTrack</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <Nav className="me-auto">
              <Nav.Link href="/users">Usuarios</Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto"></Nav>
          )}
          <Nav>
            {user ? (
              <>
                <NavDropdown title={user} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Equipes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Projetos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/logout">
                    Desconectar
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link href="/singup" rel="noopener noreferrer">
                  Registrar
                </Nav.Link>
                <Nav.Link href="/login" rel="noopener noreferrer">
                  Login
                </Nav.Link>
              </>
            )}
            {/* <NavDropdown title={user} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/register">Registrar</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#organização">
                Organização
              </NavDropdown.Item>
              <NavDropdown.Item href="#novo-projeto">
                Novo projeto
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
