import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  CenterFlexContainer,
  MainContainer,
  RoundedButton,
 
} from "../Global";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


//firestore
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";



export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const collegeNameRef = useRef();
  const nameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    collegeName: "",
    stemId: "",
  };

  //handling form values

  const [formValues, setFormValues] = useState(initialValues);
  const uploadUserDetails = async (email) => {
    try {
      const docRef = await setDoc(doc(db, "userDetails", email.toLowerCase()), {
        userEmail: emailRef.current.value.toLowerCase(),
        name: nameRef.current.value,
        collegeName: collegeNameRef.current.value,
        stemId: "pending", //TO DO: define auto id
      });
      console.log("Document written");
       //TO DO: navigate auth success page
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value.toLowerCase(),
        passwordRef.current.value.toLowerCase()
      );
      uploadUserDetails(emailRef.current.value);
      navigate("/stem");
    } catch (e) {
      console.log(e);
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <MainContainer style={{ margin: "94px auto 14px auto" }}>
      <Card style={{ maxWidth: "450px", margin: "auto" }}>
        <Card.Body className="mb-2">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="collegeName">
              <Form.Label>College Name</Form.Label>
              <Form.Select type="select" ref={collegeNameRef} required>
                <option disabled>Select College</option>
                <option value="Anjuman">Anjuman</option>
                <option value="Shams">Shams</option>
              </Form.Select>
            </Form.Group>
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
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>

            <RoundedButton disabled={loading} className="w-100 mt-4" type="submit">
              Sign Up
            </RoundedButton>
          </Form>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/stem/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </MainContainer>
  );
}
