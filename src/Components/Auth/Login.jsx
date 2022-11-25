import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { CenterFlexContainer, MainContainer, RoundedButton } from "../Global";

import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;

  min-height: 100%;
  min-width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
    body {
      background: url(mobilebg);
    }
  }
`;

export const Content = styled(CenterFlexContainer)`
  position: absolute;

  top: 0;
  padding-top: 80px;
  background: rgba(0, 0, 0, 0.5);
  /* color: #f1f1f1; */
  width: 100%;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(currentUser);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <MainContainer style={{ margin: "94px auto 14px auto" }}>
      <Card style={{ maxWidth: "450px", margin: " 32px auto" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <RoundedButton disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </RoundedButton>
          </Form>

          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/stem/register">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </MainContainer>
  );
}
