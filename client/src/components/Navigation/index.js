import {NavLink} from 'react-router-dom';
import * as authService from "../../api/auth.service";
import { Nav, Navbar,Container, NavDropdown } from 'react-bootstrap';

export default function Navigation ({checkUserActive}){
    const handleLogout = async () => {
        const res = await authService.logout();
        checkUserActive();
        return res;
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand>Patient Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
            <Nav.Link>
            <NavLink  style = {{textDecoration: "none", color: "black"}} 
                to='/staff'>
                    Profile
                </NavLink> 
                </Nav.Link>
                <NavDropdown title="Clinic" id="basic-nav-dropdown">
                <Nav.Link style = {{textDecoration: "none", color: "black"}} >
            <NavLink style = {{textDecoration: "none", color: "black"}} 
                to='/clinicadd'>
                    Add Clinic
                </NavLink>
                </Nav.Link>
                <Nav.Link style = {{textDecoration: "none", color: "black"}} >
            <NavLink style = {{textDecoration: "none", color: "black"}} 
                to='/clinicview'>
                    View Clinic
                </NavLink>
                </Nav.Link>
                </NavDropdown>
                <NavDropdown title="Patient" id="basic-nav-dropdown">
                <Nav.Link style = {{textDecoration: "none", color: "black"}} >
            <NavLink style = {{textDecoration: "none", color: "black"}} 
                to='/addpatient'>
                    Add Patient
                </NavLink>
                </Nav.Link>
                <Nav.Link>
            <NavLink style = {{textDecoration: "none", color: "black"}} 
                to='/viewpatient'>
                    View Patient
                </NavLink>
                </Nav.Link>
                <Nav.Link>
            <NavLink style = {{textDecoration: "none", color: "black"}} 
                to='/updatepatient'>
                    Update Patient
                </NavLink>
                </Nav.Link>
                </NavDropdown>
                <NavLink style = {{textDecoration: "none", color: "black"}} 
                to='/'
                onClick={handleLogout}>
                    Logout
                </NavLink>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}