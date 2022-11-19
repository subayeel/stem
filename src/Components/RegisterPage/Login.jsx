import React from "react";
import {
  UserNameField,
  PasswordField,
  TextfieldWrap,
  LoginContainer,
  LoginWrapper,
  Heading,
  LoginForm,
  BtnWrap,
  TextWrap,
  BottomLine,
  OrLineContainer,
  Line,
  OrLine,
  OrLineWrapper,
  ForgotPassword,
  Color,
  GoogleContainer,
  IconContainer,
  GoogleIcon,
  ShareText,
  FacebookIcon,
  FacebookContainer,
  LoginButton,
} from "./RegisterPage.elements";

const LoginSection = () => {
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginForm>
            <TextWrap>
              <Heading>
                <Color>Beginning!</Color>
              </Heading>
              <BottomLine>the journey towards light.</BottomLine>
            </TextWrap>
            <TextfieldWrap>
              <UserNameField />
            </TextfieldWrap>
            <TextfieldWrap>
              <PasswordField />
            </TextfieldWrap>
            <ForgotPassword to="/stem/register">Haven't registered?</ForgotPassword>
            <BtnWrap>
              <LoginButton light to="" primary>
                Sign in
              </LoginButton>
            </BtnWrap>
              </LoginForm>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginSection;
