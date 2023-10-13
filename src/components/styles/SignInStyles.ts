import styled from "styled-components";

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
  padding?: number;
  background?: string;
  borderRadiusForColumnOne?: number;
  borderRadiusForColumnTwo?: number;
};

export const FormWrapper = styled.div`
  background-color: #8daef2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Columns = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  background: ${(props) => props.background};
  height: 80vh;
  border-top-left-radius: ${(props) => props.borderRadiusForColumnOne + `px`};
  border-bottom-left-radius: ${(props) =>
    props.borderRadiusForColumnOne + `px`};
  border-top-right-radius: ${(props) => props.borderRadiusForColumnTwo + `px`};
  border-bottom-right-radius: ${(props) =>
    props.borderRadiusForColumnTwo + `px`};
  padding: ${(props) => props.padding + `px`};

  @media (max-width: 576px) {
    flex: ${({ sizeSm }) => sizeSm};
  }

  @media (max-width: 768px) {
    flex: ${({ sizeMd }) => sizeMd};
  }

  @media (max-width: 992px) {
    flex: ${({ sizeLg }) => sizeLg};
  }

  @media (max-width: 1200px) {
    flex: ${({ sizeXl }) => sizeXl};
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const Headers = styled.div`
  text-align: center;

  h2 {
    color: #1f47bf;
    margin: 0;
  }

  h6 {
    color: #595454;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Footers = styled.div`
  text-align: center;

  p {
    font-size: 13px;
    margin: 5px;
  }

  h6 {
    color: #595454;
    margin: 10px 0 0 0;

    span {
      color: #1f47bf;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding-left: 12px;
  font-size: 14px;
  font-weight: normal;
  border: none;
  transition: border-color 150ms ease-in-out 0s;
  outline: none;
  color: rgb(33, 49, 60);
  background-color: rgb(255, 255, 255);

  :hover {
    box-shadow: rgb(231 238 236) 0px 0px 0px 3px;
  }
`;

export const IconContainer = styled.div`
  margin-left: 13px;
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(191, 195, 196);
  margin-bottom: 10px;
  border-radius: 6px;
`;

export const StyledButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin-right: 10px;
  min-height: 2rem;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  padding: 10px;

  :hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;

export const ButtonIconContainer = styled.div`
  margin-right: 0.5rem;
  /* font-size: 18px; */
  display: flex;
`;

export const SignUpStyledButton = styled.button`
  align-items: center;
  background-color: #1f47bf;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin-right: 10px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 100%;
  padding: 10px;

  :hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;
