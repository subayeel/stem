import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaTimes, FaGoogle, FaFacebookF } from "react-icons/fa";

export const FormContainer = styled.div`
  max-width: 1140px;
  position: relative;
  margin: 0 auto;
`;
export const FormWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 14px;
  }
`;

export const ConditionalContainer = styled.div`
  display: ${({ state }) => (state ? "flex" : "none")};
  width: 100%;
  transition: 0.5s;
`;

export const HeadingContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 28px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.hr`
  flex: 3;
  height: 1px;
  width: 100%;
  background-color: black;
`;

export const Heading = styled.h1`
  color: #1b1a55;
  flex: 3;
  width: 100%;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const Heading2 = styled.h3`
  color: #1b1a55;
  flex: 1;

  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin: 7px 0;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 24px;
  height: 24px;
  color: #1b1a55;
  position: absolute;
  left: 9px;
  top: 50%;
  transform: translate(0, -50%);
  display: ${({ state }) => (state ? "block" : "none")};
  transition: 0.2s ease-in;
`;

export const FormGroup = styled.form`
  width: 100%;
  margin-top: 14px;
`;
export const Label = styled.label`
  width: 100%;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: 600;
  margin-right: 24px;
`;

export const InputField = styled.input`
  width: 100%;

  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;

export const InputAreaField = styled.textarea`
  width: 100%;

  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;
export const SelectField = styled.select`
  width: 100%;

  padding: 12px 14px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;

export const DateField = styled.input.attrs({ type: "date" })`
  width: 100%;

  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 7px;
  box-sizing: border-box;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin: 0 7px 0 0;
`;

export const RadioBtn = styled.input.attrs({ type: "radio" })`
  margin: 0 7px 0 0;
`;
export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  margin-top: 14px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FileInput = styled.input.attrs({
  type: "file",
  accept: "image/*",
})`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline-color: #1b1a55;
  }
`;
export const SubmitBtn = styled.button`
  padding: 14px 28px;
  color: white;
  background-color: #1b1a55;
  border-radius: 28px;
  width: 100%;
  margin: 14px 0;
  border: none;
  &:hover {
    background-color: black;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const RegisterOptionContainer = styled.div`
  max-width: 1140px;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;
export const RegisterOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const RegisterCardContainer = styled.div`
  display: block;
  width: 300px;

  margin: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

export const RegisterCardWrapper = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: column;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Button = styled(Link)`
  padding: 12px 24px;
  color: white;
  margin: auto;
  background-color: #1b1a55;
  border-radius: 28px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: black;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const TextWrap = styled.div`
  padding: 7px 0;
  text-align: center;
`;

export const SuccessText = styled.h1`
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 36px;
  color: green;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 0.5px;
  }
`;
export const SuccessCard = styled.div`
  width: 500px;

  border-radius: 12px;
  display: flex;
  padding: 36px;
  /* align-items: center; */
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 0 36px rgba(33, 33, 33, 0.2);
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;
export const ImgWrap = styled.div`
  height: 100px;
  width: 100px;
  margin: 14px auto;
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Text2 = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: $ccc;
  margin: 3px 0;
`;
export const Text3 = styled.p`
  font-size: 16px;
  color: black;
  margin: 4px 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
`;

export const CardContainer = styled.div`
  display: flex;
  margin: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LinkText = styled.a`
  color: purple;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ModalContent = styled.div`
  display: flex;

  flex-direction: column;
`;

export const HighlitedText = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #970000;
  text-align: center;
  justify-content: center;
  display: flex;
`;

export const HighlitedGreenText = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: green;
  margin: 7px;
  text-align: center;
`;

export const CloseIcon = styled(FaTimes)`
  color: #1b1a55;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 2%;
  top: 5%;
  :hover {
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Text4 = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #811515;
  margin: 4px 0;
  text-align: ${({ start }) => (start ? "start" : "center")};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

//login elements

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
`;

export const LoginWrapper = styled.div`
  display: flex;

  height: 320px;
  width: 300px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  padding: 10px;
  background-color: white;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  padding: 0 24px;
`;

export const BottomLine = styled.p`
  display: block;
  font-size: 18px;
  margin: 0;
  color: #666666;
  font-weight: 400;
`;
export const LoginForm = styled.form`
padding-top:32px;
  width: 100%;
`;

export const TextfieldWrap = styled.div`
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
`;
export const UserNameField = styled.input.attrs({
  type: "text",
  placeholder: "Username",
})`
  cursor: pointer;

  color: #707070;
  width: 90%;
  height: 36px;
  border: none;

  outline: none;
  margin: 7px 0;
  padding: 0 10px;
  box-shadow: 0px 0px 7px;

  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
  }
`;

export const PasswordField = styled.input.attrs({
  type: "text",
  placeholder: "Password",
})`
  cursor: pointer;

  color: #707070;
  width: 90%;
  height: 36px;
  border: none;
  margin: 7px 0;
  padding: 0 10px;
  outline: none;

  box-shadow: 0px 0px 7px;

  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 14px 0;
`;

export const OrLineContainer = styled.div`
  height: 40px;
`;

export const OrLineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ForgotPassword = styled(Link)`
  font-size: 14px;
  text-decoration-line: none;
  color: #3c7c90;
  padding: 0 7px;
  &:hover {
    color: #73b3c7;
  }
`;
export const Color = styled.p`
  margin: 0;
  color: #3c7c90;
`;

export const GoogleContainer = styled.div`
  width: 80%;
  height: 36px;
  display: flex;
  align-items: center;
  margin: 10px auto;

  background-color: #db5651;
  &:hover {
    cursor: pointer;
    background-color: #e0322b;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GoogleIcon = styled(FaGoogle)`
  height: 24px;
  margin: 10px;
  width: 24px;
  color: #eeeeee;
`;

export const ShareText = styled.p`
  flex: 3;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  text-align: center;
`;

export const FacebookContainer = styled.div`
  width: 80%;
  height: 36px;
  display: flex;
  align-items: center;
  margin: 10px auto;

  background-color: #435a8a;
  &:hover {
    background-color: #304d8a;
    cursor: pointer;
    transition: 0.25s;
  }
`;

export const FacebookIcon = styled(FaFacebookF)`
  height: 24px;
  margin: 10px;
  width: 24px;
  color: #eeeeee;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  text-align: center;
  background-color: #3c7c90;
  color: #eeeeee;
  height: 36px;
  width: 80%;
`;
export const OrLine = styled.p`
  font-weight: 500px;
  font-size: 16px;
  margin: 5px;
  color: #8c8c8c;
`;
