import React, { useState } from "react";
// import FormInput from "./FormInput";
import {
  DisplayErrorMessage,
  IconContainer,
  Input,
  InputContainer,
  SignUpStyledButton,
} from "./styles/SignInStyles";
import { CgProfile } from "react-icons/cg";
import { MdEmail, MdPassword } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const FormBody: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    const filled =
      values.name && values.email && values.phone && values.password;

    setSubmitDisabled(!filled);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors = validateForm(values);
    setFormErrors(formErrors);

    if (Object.values(formErrors).every((value) => value === "")) {
      // Form is valid, submit data
      toast.success("Form Submitted Successfully");
    }
  };

  const validateForm = (values: FormValues) => {
    const errors: FormValues = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
   
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(values.phone)) {
      errors.phone = "Phone number must contain only numbers";
    } else if (values.phone.length !== 10) {
      errors.phone = "The length of the phone number should be 10";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    if (!values.password.match(passwordRegex)) {
      errors.password =
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character";
    }

    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <IconContainer>
            <CgProfile />
          </IconContainer>
          <Input
            placeholder="Enter your Name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </InputContainer>
        {formErrors.name && (
          <DisplayErrorMessage>{formErrors.name}</DisplayErrorMessage>
        )}
        <InputContainer>
          <IconContainer>
            <MdEmail />
          </IconContainer>
          <Input
            placeholder="Enter your Email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </InputContainer>
        {formErrors.email && (
          <DisplayErrorMessage>{formErrors.email}</DisplayErrorMessage>
        )}
        <InputContainer>
          <IconContainer>
            <BsFillTelephoneFill />
          </IconContainer>
          <Input
            placeholder="Enter your Phone"
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </InputContainer>
        {formErrors.phone && (
          <DisplayErrorMessage>{formErrors.phone}</DisplayErrorMessage>
        )}
        <InputContainer>
          <IconContainer>
            <MdPassword />
          </IconContainer>
          <Input
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </InputContainer>
        {formErrors.password && (
          <DisplayErrorMessage>{formErrors.password}</DisplayErrorMessage>
        )}
        <SignUpStyledButton type="submit" disabled={submitDisabled}>
          Sign up
        </SignUpStyledButton>
        <ToastContainer />
      </form>
    </>
  );
};

export default FormBody;
