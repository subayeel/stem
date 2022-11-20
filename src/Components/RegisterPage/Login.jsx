import React, { useRef, useState } from "react";
import styled from "styled-components"
import { Form, Button, Card, Alert } from "react-bootstrap";
import { CenterFlexContainer, Section } from "../Global";
import loginbg from "../../Videos/login-bg.mp4";

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
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <Section style={{overflow:"hidden"}}>
      <VideoBg autoPlay muted loop>
        <source src={loginbg} type="video/mp4" />
      </VideoBg>
      <Content>
        <Card style={{ maxWidth: "400px", margin: " 32px auto" }}>
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
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/stem/register">Sign Up</Link>
        </div>
      </Content>
    </Section>
  );
}
