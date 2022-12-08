import React, { useRef, useState } from "react";

//modal
import Modal from "react-modal";
import spinner from "../../Images/spinner.gif";
import { MainWrapper, MainContainer, RoundedButton } from "../Global";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

//firestore
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

//styled-components
import { TextWrapper } from "../Home/Home.elements";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dishRef = useRef();

  const passwordConfirmRef = useRef();
  const collegeNameRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const collegeOtherRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const initialValues = {
  //   name: "",
  //   collegeName: "",
  //   phone: "",
  //   stemId: "",
  // };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "#0F1128",
      backgroundColor: "#fff",
      overflow: "hidden",
    },
  };

  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //handling form values

  // const [formValues, setFormValues] = useState(initialValues);
  // const [isOtherCollege, setIsOtherCollege] = useState(false);

  // if (collegeNameRef.current.value === "other") {
  //   setIsOtherCollege(true);
  // } else {
  //   setIsOtherCollege(false);
  // }

  // const [uid, setUid] = useState();

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

  async function incrementSetUserId() {
    const docRef = doc(db, "userId", "userId");
    const docSnap = await getDoc(docRef);

    console.log("Got id");
    var id = docSnap.data().userId + 1;
    await setDoc(doc(db, "userId", "userId"), {
      userId: id,
    });
    console.log("Id incremented");
    return id;
  }

  const uploadUserDetails = async (email) => {
    try {
      var uid = await incrementSetUserId();

      await setDoc(doc(db, "userDetails", email), {
        userEmail: emailRef.current.value.toLowerCase(),
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        collegeName: collegeNameRef.current.value,
        otherCollege: collegeOtherRef.current.value,
        scavimaina: selectedEvents.scavimaina,
        technophilia: selectedEvents.technophilia,
        enunciate: selectedEvents.enunciate,
        modalExpo: selectedEvents.modalExpo,
        dishType: dishRef.current.value,
        stemId: "STEM22 - " + uid.toString(),
      });
      console.log("Document written");
      navigate("/stem");

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
    } else if (collegeNameRef.current.value === "Select College") {
      return setError("Please choose College Name");
    }

    try {
      setError("");
      setIsOpen(true);
      setLoading(true);
      setTimeout(registering, 5000);
      function registering() {
        setIsOpen(false);
      }

      await signup(
        emailRef.current.value.toLowerCase(),
        passwordRef.current.value.toLowerCase()
      );
      uploadUserDetails(emailRef.current.value);
    } catch (e) {
      console.log(e);
      setError(e.toString().slice(24));
    }

    setLoading(false);
  }

  return (
    <MainContainer style={{ margin: "94px auto 14px auto" }}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={spinner} alt="loading-icon" />
          </div>

          <TextWrapper>
            <h2>Save the Date 10th December 2022!</h2>
            <h5>Remainder</h5>
            <ul>
              <li>College Id Cards are Mandatory</li>
              <li>Registeration Compulsory for participation in Events.</li>
            </ul>
          </TextWrapper>
          <RoundedButton disabled onClick={closeModal}>
            Redirecting...
          </RoundedButton>
        </div>
      </Modal>

      <MainWrapper>
        <Card>
          <Card.Body className="mb-2">
            <h2 className="text-center mb-4">Sign Up</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group id="name" className="mt-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" ref={nameRef} required />
              </Form.Group>
              <Form.Group id="collegeName" className="mt-4">
                <Form.Label>College Name</Form.Label>
                <Form.Select type="select" ref={collegeNameRef} required>
                  <option disabled selected>
                    Select College
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
                  <option value="Govt PU College Bhatkal">
                    Govt PU College Bhatkal
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
                  <option value="The New English PU College">
                    The New English PU College
                  </option>
                  <option value="National PU College ">
                    National PU College{" "}
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
                  <option value="RNS Polythinic">RNS Polythinic</option>
                  <option value="Beena Vaidya PU College">
                    Beena Vaidya PU College
                  </option>
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
                  <option value="Sri Shardamba  PU College Honavar">
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

                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group id="otherCollege" className="mt-2">
                <Form.Control
                  placeholder="If Other? Enter college name"
                  ref={collegeOtherRef}
                />
              </Form.Group>

              <div>
                <p className="mt-4 mb-0">Which is your favorite event?</p>
                <Form.Check
                  type="switch"
                  id="custom-switch1"
                  label="Scavimaina"
                  name="scavimaina"
                  onChange={handleEventsCheck}
                />

                <Form.Check
                  type="switch"
                  id="custom-switc2"
                  label="Technophilia"
                  name="technophilia"
                  onChange={handleEventsCheck}
                />
                <Form.Check
                  type="switch"
                  id="custom-switch3"
                  label="Enunciate"
                  name="enunciate"
                  onChange={handleEventsCheck}
                />
                <Form.Check
                  type="switch"
                  id="custom-switch4"
                  label="Model Expo"
                  name="modelExpo"
                  onChange={handleEventsCheck}
                />
              </div>

              <Form.Group id="email" className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group className="mt-4">
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
              <Form.Group id="password" className="mt-4">
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
              {error && <Alert variant="danger">{error}</Alert>}

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
