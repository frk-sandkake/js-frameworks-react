import './App.css';
import Heading from './components/Heading';
import Paragraph from "./components/Paragraph";
function App() {
  return (
    <div className="App">
      <Heading
        name="Jack"
        age="31"
        color="red"
        fontSize="36"
      />
      <Paragraph content="hello i am a nice guy" />
      <Heading
        name="Sara"
        age="23"
        color="green"
        fontSize="68"
      />
      <Paragraph content="me too" />
      <Paragraph>
        hello i am hesham
      </Paragraph>
    </div>
  );
}

export default App;
