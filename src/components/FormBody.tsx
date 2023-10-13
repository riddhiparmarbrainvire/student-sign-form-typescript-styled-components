import React from "react";
// import FormInput from "./FormInput";
import {
  IconContainer,
  Input,
  InputContainer,
  SignUpStyledButton,
} from "./styles/SignInStyles";
import { CgProfile } from "react-icons/cg";
import { MdEmail, MdPassword } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const FormBody: React.FC = () => {
  return (
    <>
      <InputContainer>
        <IconContainer>
          <CgProfile />
        </IconContainer>
        <Input placeholder="Enter your Name" type="text" />
      </InputContainer>

      <InputContainer>
        <IconContainer>
          <MdEmail />
        </IconContainer>
        <Input placeholder="Enter your Email" type="text" />
      </InputContainer>

      <InputContainer>
        <IconContainer>
          <BsFillTelephoneFill />
        </IconContainer>
        <Input placeholder="Enter your Phone" type="text" />
      </InputContainer>

      <InputContainer>
        <IconContainer>
          <MdPassword />
        </IconContainer>
        <Input placeholder="Enter your Password" type="text" />
      </InputContainer>

      <SignUpStyledButton>Sign up</SignUpStyledButton>
    </>
  );
};

export default FormBody;
