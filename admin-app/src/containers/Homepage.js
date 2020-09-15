import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './style.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';

function Homepage() {
  return <Sidebar sidebar>Admin Homepage</Sidebar>;
}

export default Homepage;
