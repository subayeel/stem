import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CenterFlexContainer } from "../Global";

export const StyledButton = styled(Link)`
  background-color: #534b48;
  margin:5px 23px;
  outline: none;
  border: none;
  color: #ce7d1e;
  padding: 2px;
  transition: 0.2s ease-in-out;

  @media screen and (max-width:768px) {
    width:  100%;
    margin:14px 5px;
  }


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.42), 0 1px 2px rgba(0, 0, 0, 0.44);
    
  }
`;

export const BtnText = styled(CenterFlexContainer)`
  color: #eee;
  margin: 2px;
  border: 2px solid #CD5623;
`;

export const Text = styled.p`
  margin: 0;
  padding: 5px 23px;
`;
const Button = ({text,link}) => {
  return (
    <StyledButton to={link}>
      <BtnText>
        <Text>{text}</Text>
      </BtnText>
    </StyledButton>
  );
};

export default Button;
