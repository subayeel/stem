import React from "react";
import {
  AvatarContainer,
  AvatarImgWrap,
  AvatarImg,
  AvatarWrapper,
} from "./Navbar.elements";

const Avatar = ({ imageUrl }) => {
  return (
    <>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarImgWrap>
            <AvatarImg src={imageUrl} />
          </AvatarImgWrap>
        </AvatarWrapper>
      </AvatarContainer>
    </>
  );
};

export default Avatar;
