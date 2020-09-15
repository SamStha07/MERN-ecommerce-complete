import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';

function Sidebar(props) {
  return (
    <>
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/orders">Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/category">Category</NavLink>
                </li>
              </ul>
            </Col>
            {/* right side Conatiner */}
            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '10px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
}

export default Sidebar;
