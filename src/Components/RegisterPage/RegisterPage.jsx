import React, { useState, useEffect } from "react";
import {
  CheckBox,
  CheckBoxContainer,
  DateField,
  FieldContainer,
  FormContainer,
  FormWrapper,
  Heading,
  Heading2,
  HeadingContainer,
  InputAreaField,
  InputField,
  Label,
  Line,
  RadioBtn,
  SelectField,
  FileInput,
  ConditionalContainer,
  SubmitBtn,
  FormGroup,
  Text2,
} from "./RegisterPage.elements";

import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { storage,db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const VolunteerRegisterPage = () => {
  //to navigate to succes page
  const navigate = useNavigate();

  //to seterrors
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  //handling availability check box
  const [daysCheckValues, setDaysCheckValues] = useState({
    sunday: "no",
    alldays: "no",
    thursday: "no",
    friday: "no",
    saturday: "no",
  });
  const initialValues = {
    volunteerFullName: "",
    volunteerFatherName: "",
    volunteerContactNumber: "",
    volunteerEmailId: "",
    educationQualification: "",
    volunteerDob: "",
    areaOfInterest: "",
    nawayathResidentBanglore: "",
    volunteerExperience: "",
    volunteerExperienceDetails: "",
    volunteerImageUrl: null,
    relationEmergency: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    alldays: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (formValues.volunteerExperience === "Yes") {
      setVolunteered(true);
    } else {
      setVolunteered(false);
    }
  });
  const [volunteered, setVolunteered] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //Adding days available object to formValues
  useEffect(() => {
    setFormValues({ ...formValues, ["thursday"]: daysCheckValues.thursday });
    setFormValues({ ...formValues, ["friday"]: daysCheckValues.friday });
    setFormValues({ ...formValues, ["saturday"]: daysCheckValues.saturday });
    setFormValues({ ...formValues, ["sunday"]: daysCheckValues.sunday });
    setFormValues({ ...formValues, ["alldays"]: daysCheckValues.alldays });
  }, [daysCheckValues]);

  //function to handle check
  const handleDaysCheck = (e) => {
    const { name, value } = e.target;
    if (e.target.checked === true) {
      setDaysCheckValues({ ...daysCheckValues, [name]: "yes" });
    } else {
      setDaysCheckValues({ ...daysCheckValues, [name]: "no" });
    }
  };

  //function to handle alldays checkbox

  const handleAllDaysCheck = (e) => {
    const { name, value } = e.target;
    if (e.target.checked === true) {
      document.getElementById("thu").checked = true;
      document.getElementById("fri").checked = true;
      document.getElementById("sat").checked = true;
      document.getElementById("sun").checked = true;

      document.getElementById("thu").disabled = true;
      document.getElementById("fri").disabled = true;
      document.getElementById("sat").disabled = true;
      document.getElementById("sun").disabled = true;

      setDaysCheckValues({ ...daysCheckValues, ["alldays"]: "yes" });
    } else {
      document.getElementById("thu").checked = false;
      document.getElementById("fri").checked = false;
      document.getElementById("sat").checked = false;
      document.getElementById("sun").checked = false;

      document.getElementById("thu").disabled = false;
      document.getElementById("fri").disabled = false;
      document.getElementById("sat").disabled = false;
      document.getElementById("sun").disabled = false;

      setDaysCheckValues({ ...daysCheckValues, ["alldays"]: "no" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    uploadToDB();
  };

  const handleImage = (e) => {
    console.log(e.target.files[0].size);
    if (e.target.files[0].size >= 1000000) {
      e.target.value = "";
      alert("Upload image with size less than 1MB");
    } else {
      const storageRef = ref(
        storage,
        `/volunteerImages/${e.target.files[0].name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setFormValues({ ...formValues, ["volunteerImageUrl"]: url });
          });
        }
      );
    }
  };

  const validate = (values) => {
    const errors = {};
    if (
      values.volunteerContactNumber.length !== 10 ||
      values.volunteerContactNumber.length === 0
    ) {
      alert("Number invalid");
      errors.mobileNumber = "Mobile Number is required";
    } else if ("yes" in Object.values(daysCheckValues) === false) {
      errors.mobileNumber = "Mobile Number is required";
    }
    return errors;
  };
  const uploadToDB = async () => {
    try {
      const docRef = await addDoc(collection(db, "volunteerDetails"), {
        volunteerFullName: formValues.volunteerFullName,
        volunteerFatherName: formValues.volunteerFatherName,
        volunteerContactNumber: formValues.volunteerContactNumber,
        volunteerEmailId: formValues.volunteerEmailId,
        educationQualification: formValues.educationQualification,
        volunteerDob: formValues.volunteerDob,
        areaOfInterest: formValues.areaOfInterest,
        volunteerExperience: formValues.volunteerExperience,
        volunteerExperienceDetails: formValues.volunteerExperienceDetails,
        volunteerImageUrl: formValues.volunteerImageUrl,
        relationEmergency: formValues.relationEmergency,
        thursday: formValues.thursday,
        friday: formValues.friday,
        saturday: formValues.saturday,
        sunday: formValues.sunday,
        alldays: formValues.alldays,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/"); //TO DO: navigate auth succes page
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <HeadingContainer>
          <Line></Line>
          <Heading>Registeration</Heading>
          <Line></Line>
        </HeadingContainer>
        
        <FormGroup onSubmit={handleSubmit}>
          <FieldContainer>
            <Label>
              Full Name:
              <InputField
                name="volunteerFullName"
                value={formValues.volunteerFullName}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Father Name:
              <InputField
                name="volunteerFatherName"
                value={formValues.volunteerFatherName}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Contact No:
              <InputField
                name="volunteerContactNumber"
                value={formValues.volunteerContactNumber}
                onChange={handleChange}
                required
              />
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Email Id:
              <InputField
                name="volunteerEmailId"
                value={formValues.volunteerEmailId}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Date of Birth:
              <DateField
                name="volunteerDob"
                value={formValues.volunteerDob}
                onChange={handleChange}
                required
              />
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Education Qualification:
              <SelectField
                value={formValues.educationQualification}
                onChange={handleChange}
                name="educationQualification"
                required
              >
                <option selected disabled value="">
                  Select your Qualification
                </option>
                <option value="student">Student</option>
                <option value="graduate">Graduate</option>
                <option value="post-graduate">Post Graduate</option>
                <option value="working">Working</option>
                <option value="sel-emplloyed">Self-Employed</option>
              </SelectField>
            </Label>
            <Label>
              Skills:
              <InputField />
            </Label>
            <Label>
              Area of Interest:
              <SelectField
                value={formValues.areaOfInterest}
                onChange={handleChange}
                name="areaOfInterest"
                required
              >
                <option selected disabled value="">
                  Choose your area of interest
                </option>
                <option value="score-management">Score management</option>
                <option value="umpire">Umpire</option>
                <option value="ball-boy">Ball boy</option>
              </SelectField>
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Availability:
              <br></br>
              <small>
                Please select days in which you are available for volunteering.
              </small>
              <CheckBoxContainer>
                <Label htmlFor="thursday">
                  <CheckBox
                    type="checkbox"
                    name="thursday"
                    id="thu"
                    onChange={handleDaysCheck}
                  />
                  Thursday
                </Label>
                <Label htmlFor="friday">
                  <CheckBox
                    type="checkbox"
                    name="friday"
                    id="fri"
                    onChange={handleDaysCheck}
                  />
                 Friday
                </Label>
                <Label htmlFor="saturday">
                  <CheckBox
                    type="checkbox"
                    name="saturday"
                    id="sat"
                    onChange={handleDaysCheck}
                  />
                  Saturday
                </Label>
                <Label htmlFor="sunday">
                  <CheckBox
                    type="checkbox"
                    name="sunday"
                    id="sun"
                    onChange={handleDaysCheck}
                  />
                 Sunday
                </Label>
                <Label htmlFor="alldays">
                  <CheckBox
                    type="checkbox"
                    name="alldays"
                    onChange={handleAllDaysCheck}
                  />
                  All Days
                </Label>
              </CheckBoxContainer>
            </Label>
            <Label>
              Do you have any Experience in Volunteering at Events?
              <CheckBoxContainer>
                <Label htmlFor="volunteerExperience">
                  <RadioBtn
                    value="Yes"
                    onChange={handleChange}
                    name="volunteerExperience"
                    required
                  />
                  Yes
                </Label>
                <Label htmlFor="volunteerExperience">
                  <RadioBtn
                    value="No"
                    onChange={handleChange}
                    name="volunteerExperience"
                    required
                  />
                  No
                </Label>
                <ConditionalContainer state={volunteered}>
                  <InputAreaField
                    placeholder="Give details of voluteering..."
                    onChange={handleChange}
                    name="volunteerExperienceDetails"
                  />
                </ConditionalContainer>
              </CheckBoxContainer>
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Permanent Address:
              <InputAreaField
                value={formValues.volunteerPermanentAddress}
                onChange={handleChange}
                name="volunteerPermanentAddress"
                required
              />
            </Label>
            <Label>
              Present Address:
              <InputAreaField
                value={formValues.volunteerPresentAddress}
                onChange={handleChange}
                name="volunteerPresentAddress"
              />
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Upload your photo
              <br />
              <small>Passport size photo preferred</small>
              <FileInput
                onChange={handleImage}
                name="volunteerImage"
                required
              />
            </Label>
          </FieldContainer>
          <HeadingContainer>
            <Heading2>Emergency Contacts:</Heading2>
          </HeadingContainer>
          <FieldContainer>
            <Label>
              Name:
              <InputField
                value={formValues.emergencyName}
                onChange={handleChange}
                name="emegencyName"
                required
              />
            </Label>
            <Label>
              Contact Number:
              <InputField
                value={formValues.emergencyContact}
                onChange={handleChange}
                name="emergencyContact"
                required
              />
            </Label>
            <Label>
              Relationship:
              <SelectField
                value={formValues.relationEmergency}
                onChange={handleChange}
                name="relationEmergency"
                required
              >
                <option selected disabled value="">
                  Select the relationship{" "}
                </option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="brother">Brother</option>
              </SelectField>
            </Label>
          </FieldContainer>
          <SubmitBtn>Register</SubmitBtn>
        </FormGroup>
      </FormWrapper>
    </FormContainer>
  );
};

export default VolunteerRegisterPage;
