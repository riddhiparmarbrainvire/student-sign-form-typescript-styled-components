import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import { Input } from "./components/styles/InputStyled";
import { FormContainer } from "./components/styles/FormContainer";
import { ImageDiv } from "./components/styles/ImageStyled";
import { FormImage } from "./components/styles/FormImageStyled";
import img from "./images/img.svg";

const theme = {
  colors: {
    body: "#88a9f0",
  },
  mobile: "768px",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <FormContainer>
          <ImageDiv>
            <FormImage src={img} />
          </ImageDiv>
        </FormContainer>
        <Input />
      </>
    </ThemeProvider>
  );
};

export default App;
