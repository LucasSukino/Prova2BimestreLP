import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Menu(props) {
    //a propriedade "to" do componente Link deve apontar para um path em Routes
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/usuarios">Usuarios</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bate-Papo" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/mensagens">Bate-Papo</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}