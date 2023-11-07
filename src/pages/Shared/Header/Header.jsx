import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary sticky-top"
      >
        <Container>
          <Navbar.Brand className="fw-bold text-black fs-3" href="#home">
            Foodie Crush
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex align-item-center">
              <Link
                className="me-5 fw-semibold text-black text-decoration-none "
                to="/home"
              >
                Home
              </Link>
              <Link
                className="me-5 fw-semibold text-black text-decoration-none"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="me-5 fw-semibold text-black text-decoration-none"
                to="/about"
              >
                About us
              </Link>
              <Link
                className="fw-semibold text-black text-decoration-none"
                to="/favRecipe"
              >
                Favourite Recipe
              </Link>
            </Nav>
            <Nav className="d-flex align-item-center">
              <Link className="me-4 text-secondary text-decoration-none">
                <FaUserCircle style={{ fontSize: "2rem" }} />
              </Link>
              <Link
                className="fw-bold text-black text-decoration-none"
                to="/favRecipe"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
