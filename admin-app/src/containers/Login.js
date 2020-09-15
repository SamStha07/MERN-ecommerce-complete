import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';

import Input from '../components/UI/Input';
import { login } from '../actions/index';
import { Redirect } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    // console.log(user);
    props.login(user);
  };

  // after login, redirects to Admin homepage
  const { authenticate, loading } = props.auth;
  if (loading) {
    return (
      <div style={{ position: 'fixed', left: '48%', top: '50%' }}>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
  }
  if (authenticate) {
    return <Redirect to={'/'} />;
  }

  return (
    <>
      <Container>
        <Row style={{ marginTop: '4rem' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Input
                label="Email address"
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage="We'll never share your email with anyone else."
              />

              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit" value="Submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function mapStateToProps(state) {
  // console.log(state.auth);
  return { auth: state.auth };
}

export default connect(mapStateToProps, { login })(Login);
