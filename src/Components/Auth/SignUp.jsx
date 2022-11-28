import React, { useEffect, useRef, useState } from "react";

import { MainWrapper, MainContainer, RoundedButton } from "../Global";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

//firestore
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const collegeNameRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const collegeOtherRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    collegeName: "",
    phone: "",
    stemId: "",
  };

  //handling form values

  const [formValues, setFormValues] = useState(initialValues);
  const [isOtherCollege, setIsOtherCollege] = useState(false);

  // if (collegeNameRef.current.value === "other") {
  //   setIsOtherCollege(true);
  // } else {
  //   setIsOtherCollege(false);
  // }

  const [uid, setUid] = useState();

  async function getUserId() {
    const docRef = doc(db, "userId", "userId");
    const docSnap = await getDoc(docRef);
    setUid(docSnap.data().userId);
    console.log("Got id");
  }

  async function incrementSetUserId(newId) {
    var id = newId + 1;
    const idRef = await setDoc(doc(db, "userId", "userId"), {
      userId: id,
    });
    setUid(id);
    console.log("Id incremented");
  }
  useEffect(() => {
    getUserId();
  }, []);

  const uploadUserDetails = async (email) => {
    try {
      incrementSetUserId(uid);

      const docRef = await setDoc(doc(db, "userDetails", email.toLowerCase()), {
        userEmail: emailRef.current.value.toLowerCase(),
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        collegeName: collegeNameRef.current.value,
        otherCollege: collegeOtherRef.current.value,
        stemId: "STEM22 - " + uid,
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
    } else if (phoneRef.current.value.length !== 10) {
      return setError("Invalid Mobile number");
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
      <MainWrapper>
        <Card>
          <Card.Body className="mb-2">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name" className="mt-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" ref={nameRef} required />
              </Form.Group>
              <Form.Group id="collegeName" className="mt-2">
                <Form.Label>College Name</Form.Label>
                <Form.Select type="select" ref={collegeNameRef} required>
                  <option disabled selected>
                    Select College
                  </option>
                  <option
                    disabled
                    style={{ borderBottom: "2px", marginBottom: "4px" }}
                  >
                    South
                  </option>
                  <option value="Touheed PU College ">
                    Touheed PU College{" "}
                  </option>
                  <option value="Govt PU College Shirur">
                    Govt PU College Shirur
                  </option>
                  <option value="Govt PU College Byndoor">
                    Govt PU College Byndoor
                  </option>
                  <option value="RNS Composite PU College Kundapur">
                    RNS Composite PU College Kundapur
                  </option>
                  <option value="St.Mary PU College Kundapur">
                    St.Mary PU College Kundapur
                  </option>
                  <option value="Sri Venkatramana PU College Kundapur">
                    Sri Venkatramana PU College Kundapur
                  </option>
                  <option value="Gurukula PU College Kundapur">
                    Gurukula PU College Kundapur
                  </option>
                  <option value="Bhandakar Arts and Science PU College">
                    Bhandakar Arts and Science PU College
                  </option>
                  <option value="Green valley International School">
                    Green valley International School
                  </option>

                  <option
                    disabled
                    style={{ borderBottom: "2px", marginBottom: "4px" }}
                  >
                    North
                  </option>

                  <option value="RNS PU College">RNS PU College</option>
                  <option value="RNS Diploma">RNS Diploma</option>
                  <option value="BinaVidya PU">BinaVidya PU</option>
                  <option value="Govt College Honavar">
                    Govt College Honavar
                  </option>
                  <option value="Govt First Grade Honnavar">
                    Govt First Grade Honnavar
                  </option>
                  <option value="MPES SDM PU College Honavar">
                    MPES SDM PU College Honavar
                  </option>
                  <option value="Janatha Vidyalaya Honavar">
                    Janatha Vidyalaya Honavar
                  </option>
                  <option value="SKP PU College Salakod">
                    SKP PU College Salakod
                  </option>
                  <option value="Gokhale Cenetary PU College Ankola">
                    Gokhale Cenetary PU College Ankola
                  </option>
                  <option value="Sri Subhramanya PU College Honavar">
                    Sri Subhramanya PU College Honavar
                  </option>
                  <option value="Govt PU College Manki">
                    Govt PU College Manki
                  </option>
                  <option value="RES COMP PU College Honavar">
                    RES COMP PU College Honavar
                  </option>
                  <option value="PM COMP PU College Ankola">
                    PM COMP PU College Ankola
                  </option>
                  <option value="Govt PU College Ankola">
                    Govt PU College Ankola
                  </option>
                  <option value="Govt PU College Kumta">
                    Govt PU College Kumta
                  </option>
                  <option value="Govt Mohan K Shetty PU College Honavar">
                    Govt Mohan K Shetty PU College Honavar
                  </option>
                  <option value="Sri Shurdamba PU College Honavar">
                    Sri Shurdamba PU College Honavar
                  </option>
                  <option value="Canara Excellence PU College Kumta">
                    Canara Excellence PU College Kumta
                  </option>

                  <option
                    style={{ borderBottom: "2px", marginBottom: "4px" }}
                    value=""
                    disabled
                  >
                    {" "}
                    West
                  </option>
                  <option value="MES PU College Sirsi">
                    MES PU College Sirsi
                  </option>
                  <option value="Vidyodaya PU College Sirsi">
                    Vidyodaya PU College Sirsi
                  </option>
                  <option value="Progressive PU College Sirsi">
                    Progressive PU College Sirsi
                  </option>
                  <option value="Govt  Marikamba PU College Sirsi">
                    Govt Marikamba PU College Sirsi{" "}
                  </option>
                  <option value="Govt PU College Sirsi">
                    Govt PU College Sirsi
                  </option>
                  <option value="Chaitanya PU College Sirsi">
                    Chaitanya PU College Sirsi
                  </option>
                  <option value="Govt MHN PU College Sirsi">
                    Govt MHN PU College Sirsi
                  </option>

                  <option
                    style={{ borderBottom: "2px", marginBottom: "4px" }}
                    value=""
                    disabled
                  >
                    {" "}
                    Bhatkal
                  </option>
                  <option value="Anjuman Boys PU College">
                    Anjuman Boys PU College
                  </option>
                  <option value="Anjuman Womens PU College">
                    Anjuman Womens PU College
                  </option>
                  <option value="Anand Ashram Composite PU College">
                    Anand Ashram Composite PU College
                  </option>
                  <option value="Siddharta PU College">
                    Siddharta PU College
                  </option>
                  <option value="Suddindhra PU College">
                    Suddindhra PU College
                  </option>
                  <option value="National PU College ">
                    National PU College{" "}
                  </option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group id="otherCollege" className="mt-2">
                <Form.Control 
                
                  placeholder="Other?, College name (optional)"
                  ref={collegeOtherRef}
                />
              </Form.Group>

              <Form.Group id="email" className="mt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="phone" className="mt-2">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="tel" ref={phoneRef} required />
              </Form.Group>
              <Form.Group id="password" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm" className="mb-2">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>

              <RoundedButton
                disabled={loading}
                className="w-100 mt-4"
                type="submit"
              >
                Sign Up
              </RoundedButton>
            </Form>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/stem/login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      </MainWrapper>
    </MainContainer>
  );
}
