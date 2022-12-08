import React, { useRef, useState, useEffect } from "react";

//modal
import Modal from "react-modal";
import spinner from "../../Images/spinner.gif";
import { MainWrapper, MainContainer, RoundedButton } from "../Global";
import { Form, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

//firestore
import { setDoc, doc, getDoc } from "firebase/firestore";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

//styled-components
import { TextWrapper } from "../Home/Home.elements";
import styled from "styled-components";

//data imports
import { colleges } from "../../Data/college";

const DropDown = styled.div`
  position: absolute;
  max-height: 300px;
  width: 100%;
  overflow: auto;
  background-color: #eee;
`;

const ListItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 7px 14px;
  &:hover {
    cursor: pointer;
    background-color: #0f1128;
    color: #eee;
  }
`;
function Admin() {
  const idRef = useRef();
  const dishRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const collegeNameRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const phoneConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dropDownState, setDropDown] = useState(false);
  const [collegeQuery, setQuery] = useState("");
  const [items, setItem] = useState(colleges);
  const navigate = useNavigate();

  const s_chk = document.getElementById("scavimaina");
  const t_chk = document.getElementById("technophilia");
  const e_chk = document.getElementById("enunciate");
  const m_chk = document.getElementById("modalExpo");

  const initialCheckValues = {
    scavimaina: "no",
    technophilia: "no",
    enunciate: "no",
    modalExpo: "no",
  };

  const [selectedEvents, setSelectedEvent] = useState(initialCheckValues);
  //function to handle check
  const handleEventsCheck = (e) => {
    const { name, value } = e.target;
    if (e.target.checked === true) {
      setSelectedEvent({ ...selectedEvents, [name]: "yes" });
    } else {
      setSelectedEvent({ ...selectedEvents, [name]: "no" });
    }
  };

  //   async function incrementSetUserId() {
  //     const docRef = doc(db, "userId", "userId");
  //     const docSnap = await getDoc(docRef);

  //     console.log("Got id");
  //     var id = docSnap.data().userId + 1;
  //     await setDoc(doc(db, "userId", "userId"), {
  //       userId: id,
  //     });
  //     console.log("Id incremented");
  //     return id;
  //   }

  const uploadUserDetails = async (email) => {
    try {
      await setDoc(doc(db, "userDetails", email), {
        userEmail: emailRef.current.value.toLowerCase(),
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        collegeName: collegeNameRef.current.value,
        scavimaina: selectedEvents.scavimaina,
        technophilia: selectedEvents.technophilia,
        enunciate: selectedEvents.enunciate,
        modalExpo: selectedEvents.modalExpo,
        dishType: dishRef.current.value,
        stemId: "STEM22 - " + idRef.current.value,
      });

      console.log("Document written");
      alert("Sign up successful");

      //TO DO: navigate auth success page
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (phoneRef.current.value.length !== 10) {
      return setError("Invalid Mobile number");
    } else if (collegeNameRef.current.value === "Select College") {
      return setError("Please choose College Name");
    } else if (phoneConfirmRef.current.value !== phoneRef.current.value) {
      return setError("Mobile number dont match");
    }

    try {
      setError("");

      setLoading(true);

      // await signup(emailRef.current.value.toLowerCase(), 123456);
      uploadUserDetails(emailRef.current.value);
    } catch (e) {
      console.log(e);
      setError(e.toString().slice(24));
    }

    setLoading(false);
  }

  async function getUserFromEmail(email) {
    let userReference = collection(db, "userDetails");
    // Create a query against the collection.
    let q = query(userReference, where("userEmail", "==", email));

    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      emailRef.current.value = doc.data().userEmail;
      nameRef.current.value = doc.data().name;
      collegeNameRef.current.value = doc.data().collegeName;
      emailRef.current.value = doc.data().userEmail;
      phoneRef.current.value = doc.data().phone;
      dishRef.current.value = doc.data().dishType;

      let scavimaina = doc.data().scavimaina;
      let technophilia = doc.data().technophilia;
      let enunciate = doc.data().enunciate;
      let modalExpo = doc.data().modalExpo;
      scavimaina === "yes" ? (s_chk.checked = true) : (s_chk.checked = false);
      technophilia === "yes" ? (t_chk.checked = true) : (t_chk.checked = false);
      enunciate === "yes" ? (e_chk.checked = true) : (e_chk.checked = false);
      modalExpo === "yes" ? (m_chk.checked = true) : (m_chk.checked = false);
    });
    if (querySnapshot.empty) {
      alert("No user found");
    } else {
      console.log("user exists");
    }
  }

  async function getUserFromId(id) {
    let userReference = collection(db, "userDetails");
    // Create a query against the collection.
    let q = query(userReference, where("stemId", "==", `STEM22 - ${id}`));

    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      emailRef.current.value = doc.data().userEmail;
      nameRef.current.value = doc.data().name;
      collegeNameRef.current.value = doc.data().collegeName;
      emailRef.current.value = doc.data().userEmail;
      phoneRef.current.value = doc.data().phone;
      dishRef.current.value = doc.data().dishType;
      let scavimaina = doc.data().scavimaina;
      let technophilia = doc.data().technophilia;
      let enunciate = doc.data().enunciate;
      let modalExpo = doc.data().modalExpo;
      scavimaina === "yes" ? (s_chk.checked = true) : (s_chk.checked = false);
      technophilia === "yes" ? (t_chk.checked = true) : (t_chk.checked = false);
      enunciate === "yes" ? (e_chk.checked = true) : (e_chk.checked = false);
      modalExpo === "yes" ? (m_chk.checked = true) : (m_chk.checked = false);
    });
    if (querySnapshot.empty) {
      alert("No user found");
    } else {
      console.log("user exists");
    }
  }

  function clearFields() {
    idRef.current.value = "";
    emailRef.current.value = "";
    nameRef.current.value = "";
    collegeNameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    phoneConfirmRef.current.value = "";
    dishRef.current.value = "";
    s_chk.checked = false;
    t_chk.checked = false;
    e_chk.checked = false;
    m_chk.checked = false;
  }
  function handleCollegeSelection(college) {
    collegeNameRef.current.value = college.target.innerText;
    setDropDown(false);
  }

  function getOptions(collegeName) {
    return (
      <ListItem value={collegeName} onClick={handleCollegeSelection}>
        {collegeName}
      </ListItem>
    );
  }
  const filteredItems = colleges.filter((item) => {
    return item.toLowerCase().includes(collegeQuery.toLowerCase());
  });
  useEffect(() => {
    setItem(filteredItems);
  }, [collegeQuery]);

  return (
    <MainContainer style={{ margin: "90px auto" }}>
      <MainWrapper>
        <Card className=" w-100 mb-2">
          <Card.Body className=" w-100 mb-2">
            <h2 className="text-center mb-4">Admin Dashboard</h2>
            <Button onClick={() => clearFields()}>Clear</Button>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="id" className="mt-2">
                <Form.Label>Id</Form.Label>
                <Form.Control type="name" ref={idRef} required />
                <Button
                  onClick={() => getUserFromId(idRef.current.value)}
                  className="mt-2"
                >
                  Get
                </Button>
              </Form.Group>
              <Form.Group id="name" className="mt-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" ref={nameRef} required />
              </Form.Group>
              <Form.Group id="email" className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button
                style={{ backgroundColor: "#0F1128" }}
                className="w-100 mt-4"
                onClick={() => getUserFromEmail(emailRef.current.value)}
              >
                Check If User Exist
              </Button>
              <Form.Group id="collegeName" className="mt-4">
                <Form.Label>College Name</Form.Label>
                <Form.Control
                  placeholder="College Name"
                  onFocus={() => {
                    setDropDown(true);
                  }}
                  onChange={(e) => setQuery(e.target.value)}
                  type=""
                  ref={collegeNameRef}
                  required
                ></Form.Control>

                {dropDownState ? (
                  <DropDown>{items.map(getOptions)}</DropDown>
                ) : (
                  ""
                )}
              </Form.Group>

              <div>
                <p className="mt-4 mb-0">Which is your favorite event?</p>
                <Form.Check
                  type="switch"
                  id="scavimaina"
                  label="Scavimaina"
                  name="scavimaina"
                  onChange={handleEventsCheck}
                />

                <Form.Check
                  type="switch"
                  id="technophilia"
                  label="Technophilia"
                  name="technophilia"
                  onChange={handleEventsCheck}
                />
                <Form.Check
                  type="switch"
                  id="enunciate"
                  label="Enunciate"
                  name="enunciate"
                  onChange={handleEventsCheck}
                />
                <Form.Check
                  type="switch"
                  id="modelExpo"
                  label="Model Expo"
                  name="modelExpo"
                  onChange={handleEventsCheck}
                />
              </div>
              <Form.Group>
                <Form.Label>Select Dish preference</Form.Label>
                <Form.Select ref={dishRef}>
                  <option value="" disabled>
                    Select Dish preference
                  </option>
                  <option value="Non-Veg">Non-Veg</option>
                  <option value="Veg">Veg</option>
                </Form.Select>
              </Form.Group>

              <Form.Group id="phone" className="mt-4">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="tel" ref={phoneRef} required />
              </Form.Group>

              <Form.Group className="mt-4">
                <Form.Label>Confirm Mobile No.</Form.Label>
                <Form.Control type="tel" ref={phoneConfirmRef} required />
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <RoundedButton
                disabled={loading}
                className="w-100 mt-4"
                type="submit"
              >
                Sign Up
              </RoundedButton>
            </Form>
          </Card.Body>
        </Card>
      </MainWrapper>
    </MainContainer>
  );
}

export default Admin;
