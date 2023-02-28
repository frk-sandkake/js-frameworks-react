import './App.css';
import TermsContent from "./components/content/TermsContent";
import Container from "./components/layout/Container";
import LoginButton from "./components/form/LoginButton/LoginButton";
import Form from "./components/form/Form";
import PageHeading from "./components/typography/PageHeading";
import FormHeading from "./components/typography/FormHeading";
import Input from "./components/form/inputs/Input";
import Button from "./components/form/buttons/Button";
import FormContainer from "./components/layout/FormContainer";

function App() {
  return (
    <>
      <div className="App container">
        <h2>CSS Modules ** Starts **</h2>
        <div className="form-container">
          {/*RULES STARTS :::1:::*/}
          <div>
            <h2>Rules</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex quis ante sodales, id aliquam
              orci eleifend. Ut sodales dui in pulvinar convallis. Nam semper tortor hendrerit, lacinia mauris ac,
              aliquet
              mauris. Nullam laoreet, nisi vel fringilla faucibus, odio ligula rutrum sem, id interdum orci purus id
              nunc.
              Donec tristique dictum velit, sed sollicitudin purus tempus et. Pellentesque et ultrices leo. Vestibulum
              tincidunt lectus vel sem auctor consequat pellentesque semper nunc. Nunc pellentesque tincidunt est, sed
              fermentum ex vehicula in. Ut sit amet est tortor.</p>
          </div>

          {/*REGISTER STARTS :::2:::*/}
          <div>
            <form className="form">
              <h3>Register</h3>
              <input placeholder="Name"/>
              <input placeholder="City"/>
              <button>Register</button>
              <button>Clear</button>
            </form>
          </div>

          {/*LOG IN STARTS :::3:::*/}
          <div className="col-login">
            <button className="login">
              Login
            </button>
          </div>

          {/*TERMS* :::4:::*/}
          <div>
            <h3>Terms</h3>
            <p className="terms">
              Aenean scelerisque dignissim sapien eget fringilla. Maecenas blandit sem id lectus pulvinar, vel ornare
              neque convallis. Vivamus vulputate tincidunt metus. Donec vitae pellentesque nisi. In sit amet pretium
              augue, vitae accumsan urna. Curabitur maximus congue odio sed egestas. Vivamus id consequat leo.
              Vestibulum
              non malesuada tortor. Sed enim arcu, accumsan id lorem ac, gravida consectetur nisl. Nullam vulputate
              malesuada tempus. Nullam rutrum risus et sagittis scelerisque. Etiam vel nisl non enim lobortis elementum.
            </p>
          </div>
        </div>
      </div>

      <Container>
        <PageHeading>
          CSS Modules ** Ends **
        </PageHeading>
        <FormContainer>
          {/*RULES STARTS :::1:::*/}
          <div>
            <PageHeading>
              Rules
            </PageHeading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ex quis ante sodales, id aliquam
              orci eleifend. Ut sodales dui in pulvinar convallis. Nam semper tortor hendrerit, lacinia mauris ac,
              aliquet
              mauris. Nullam laoreet, nisi vel fringilla faucibus, odio ligula rutrum sem, id interdum orci purus id
              nunc.
              Donec tristique dictum velit, sed sollicitudin purus tempus et. Pellentesque et ultrices leo. Vestibulum
              tincidunt lectus vel sem auctor consequat pellentesque semper nunc. Nunc pellentesque tincidunt est, sed
              fermentum ex vehicula in. Ut sit amet est tortor.</p>
          </div>

          {/*REGISTER STARTS :::2:::*/}
          <div>
            <Form>
              <FormHeading>Register</FormHeading>
              <Input placeholder="Name"/>
              <Input placeholder="City"/>
              <Button>Register</Button>
              <Button variant="danger">Clear</Button>
            </Form>
          </div>

          {/*LOG IN STARTS :::3:::*/}
          <div className="col-login">
            <LoginButton/>
          </div>

          {/*TERMS* :::4:::*/}
          <div>
            <h3>Terms</h3>
            <TermsContent/>
          </div>
        </FormContainer>
      </Container>
    </>
  );
}

export default App;
