import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/index';

function HeaderNavbar(props) {
  const { authenticate } = props.auth;

  const logoutHandler = () => {
    props.logout();
  };

  const loginToShow = () => {
    if (!authenticate) {
      return (
        <>
          <li className="nav-link">
            <NavLink to="/signup" className="nav-link">
              Signup
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
          <Redirect to="/login" />
        </>
      );
    } else {
      return (
        <>
          <li className="nav-link" style={{ cursor: 'pointer' }}>
            <span onClick={logoutHandler}>Logout</span>
          </li>
          <Redirect to={'/signup'} />
        </>
      );
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>{loginToShow()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { logout })(HeaderNavbar);
// export default HeaderNavbar;
