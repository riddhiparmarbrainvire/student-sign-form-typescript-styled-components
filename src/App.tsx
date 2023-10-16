import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import {
  Column,
  Columns,
  FormWrapper,
  Image,
} from "./components/styles/SignInStyles";
import image from "./images/img.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormBody from "./components/FormBody";

const theme = {
  colors: {
    body: "#fff",
  },
  mobile: "768px",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <FormWrapper>
          <Columns>
            <Column
              size={7}
              sizeMd={12}
              sizeLg={12}
              sizeSm={12}
              background="#dce6f2"
              borderRadiusForColumnOne={20}
            >
              <Image src={image} />
            </Column>

            <Column
              size={5}
              sizeMd={12}
              sizeLg={12}
              sizeSm={12}
              background="white"
              borderRadiusForColumnTwo={20}
              padding={30}
            >
              <Header />
              <FormBody />
              <Footer />
            </Column>
          </Columns>
        </FormWrapper>
      </>
    </ThemeProvider>
  );
};

export default App;
