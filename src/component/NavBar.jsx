import React from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Offcanvas,
} from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#20c997" }} expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">USERS MANAGER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="top"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                User Manager
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Form>
                                <Nav.Link href="#action1">Home</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
