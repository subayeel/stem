import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CenterFlexContainer, Section } from "../Global";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import loginbg from "../../Videos/login-bg.mp4";

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
  padding-top:80px;
  background: rgba(0, 0, 0, 0.5);
  /* color: #f1f1f1; */
  width: 100%;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/stem/login");
    } catch (e) {
      console.log(e);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Section>
      <VideoBg autoPlay muted loop>
        <source src={loginbg} type="video/mp4" />
      </VideoBg>
      <Content>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
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
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/stem/login">Log In</Link>
        </div>
      </Content>
    </Section>
  );
}
