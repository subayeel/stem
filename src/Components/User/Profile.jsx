import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import styled from "styled-components";

import { useAuth } from "../../Contexts/AuthContext";
import { MainContainer } from "../Global";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export const FormValues = styled.p`
  font-family: Thedus Light;
  color: #6c757d;
  font-size: 18px;
  margin: 0;
`;
const Profile = () => {
  const [qrImgUrl, setQrUrl] = useState("");
  const { userEmail, name, collegeName, stemId } = useAuth();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(
        JSON.stringify({
          email: userEmail,
          name: name,
          college: collegeName,
          stemId: stemId,
        })
      );
      setQrUrl(response);
    } catch {}
  };

  useEffect(() => {
    // getOwndetails();
    generateQrCode();
  }, [name]);
  return (
    <MainContainer style={{ marginTop: "94px" }}>
      <MDBContainer className=" mt-4">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  loading="lazy"
                  src={qrImgUrl}
                  alt="avatar"
                  className=" mb-2"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  fluid
                />
                <p className="text-muted mb-2">{name}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <FormValues>{name}</FormValues>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>E-mail</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <FormValues>{userEmail}</FormValues>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>College</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <FormValues>{collegeName}</FormValues>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Stem Id</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <FormValues>{stemId}</FormValues>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MainContainer>
  );
};

export default Profile;
