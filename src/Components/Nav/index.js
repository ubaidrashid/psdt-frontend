import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/logo/mainLogo.png";
import "./nav.css";

export const BasicExample = () => {
    const location = useLocation(); // for conditional <h1>

    return (
        <Navbar expand="lg" className="navbar" role="navigation" aria-label="Main Navigation">
            <Container className="containers">
                <Navbar.Brand as={Link} to="/" className="brand-logo" aria-label="PixSpark Home">
                    <img src={logo} alt="PixSpark logo" className="logo" />
                    {location.pathname === "/" ? (
                        <h1 className="navbar-title">PixSpark</h1>
                    ) : (
                        <p className="navbar-title">PixSpark</p>
                    )}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav navbar-nav">
                        <Nav.Link as={Link} to="/" aria-label="Home Page">Home</Nav.Link>
                        <Nav.Link as={Link} to="/contact" aria-label="Contact Page">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/about" aria-label="About Page">About Us</Nav.Link>

                        <NavDropdown title="Categories" id="basic-nav-dropdown" aria-label="Card Categories">
                            <NavDropdown.Item as={Link} to="/id">ID</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dl">DL</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pr">PR</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/bill">Bill</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pp">PP</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/statement">Statement</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pdf">PDF</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/other">Other</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/uk">UK</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usa">USA</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/canada">Canada</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/separated">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
