import './App.css';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Container from "./components/layout/Container";
import PageHeading from "./components/headings/PageHeading.js";
import Form from "./components/form/Form";
import Input from "./components/form/Input";
import Button, {DangerButton} from "./components/form/Button";

const theme = {
    primaryColour: "#dbc2cf",
    secondaryColour: "#2e4756",
    borderColour: '#16262e',
    dangerColour: '#ff00ff'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Container>
            <PageHeading>Styled Components</PageHeading>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="City"/>
                <Button>Register</Button>
                <DangerButton>Cancel</DangerButton>
            </Form>
        </Container>
    </ThemeProvider>
  );
}

export default App;
