import './App.css';
import {ThemeProvider} from "styled-components";
import PageHeading from "./components/headings/PageHeading";
import Container from "./components/layout/Container";
import Input from "./components/form/Input";
import Form from "./components/form/Form";
import Button, {DangerButton} from "./components/form/Button";
import GlobalStyle from "./styles/GlobalStyle";
// 3 THEME Styled components allow us to create theme

const theme = {
  primaryColour: "#dbc2cf",
  secondaryColour: "#2e4756",
  borderColour: '#16262e',
  dangerColour: '#ff2727'
}

function App() {
  return (
    // This means that the value of theme will be available for all the theme children
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Container>
        <PageHeading>
          Register
        </PageHeading>
        <Form>
          <Input placeholder="Name"/>
          <Input placeholder="City" colour="#dbc2cf"/>
          <Button>Register</Button>
          <DangerButton>Cancel</DangerButton>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
