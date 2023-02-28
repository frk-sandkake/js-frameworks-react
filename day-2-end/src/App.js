import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Heading
          name="Thomas"
          color="green"
          fontSize="42"
      />
      <Heading
          name="Johnny"
          color="pink"
          fontSize="32"/>
      {/*Explain Reusable Components*/}
      <Heading name="Hadras" color="blue" fontSize="36"/>
      {/*We name our props whatever we want*/}
      <Paragraph content="This is the content of the paragraph"/>
      <Paragraph content="This is the content of the SECOND paragraph"/>
      <Paragraph>
        This is Third paragraph
      </Paragraph>
    </div>
  );
}

export default App;
