import React from 'react';
import {
    Navbar,
    Nav,
    Container,
    Button,
} from 'react-bootstrap';
export default function Header() {
    return (
        <header>
            <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#1f2b52' }} fixed="top" className="fw-bold">
                <Container fluid>
                    <Navbar.Brand href="#home">ZEAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="ms-auto mb-2 mb-lg-0 me-2 align-center" style={{ display: 'flex', alignItems: 'center' }} as="ul">
                            <Nav.Item as="li"><Nav.Link href="#beranda">Beranda</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#tentang">Tentang</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#layanan">Layanan</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#sapa-kami">Sapa Kami</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="#join-us">Join Us</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Button style={{backgroundColor: '#3935EB', borderColor: '#3935EB'}}>Login</Button></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}