import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
export function Footer() {
  return (
    <footer className="bg-#2B3035 text-white py-4 mt-auto">
      <Container bg="Success">
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Sobre nos</h5>
            <p className="text-muted">DevTrack</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-decoration-none text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="text-muted">
                <i className="bi bi-envelope"></i>
                <a href="https://github.com/Software-Engineering-Stack">
                  Github
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} DevTrack . All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
