import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Heading
          name="Jane"
          age="40"
          color="purple"
          fontSize="28"
      />
      <Paragraph
          content="Let's be the change we wish to see in the world"
      />
    </div>
  );
}

export default App;
