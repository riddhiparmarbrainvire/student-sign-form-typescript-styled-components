import React from "react";
import {
  ButtonIconContainer,
  Footers,
  StyledButton,
} from "./styles/SignInStyles";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <>
      <Footers>
        <p>Or Signup with</p>
        <StyledButton>
          <ButtonIconContainer>
            <BsGoogle />
          </ButtonIconContainer>
          Google
        </StyledButton>
        <StyledButton>
          <ButtonIconContainer>
            <BsFacebook />
          </ButtonIconContainer>
          Facebook
        </StyledButton>
        <h6>
          Already have an account? <span>Sign in</span>
        </h6>
      </Footers>
    </>
  );
};

export default Footer;
