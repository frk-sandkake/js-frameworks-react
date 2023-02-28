import './App.css';
import Form from "./components/Form";
import SomeComponentForLearningState from "./components/SomeComponentForLearningState";
import SomeComponentForLearningStateTwo from "./components/SomeComponentForLearningStateTwo";

function App() {
  //1. Show how to do the onClick
  function onButtonClick() {
    console.log("Hello I am clicked!! ")
  }

  //2. Show how to pass values to a function
  function onButtonClickTwo(someParam) {
    console.log("Hello I am clicked!! ")
    console.log("someParam: ", someParam)
  }

  return (
    <div className="App container">
      <h2>Example 1 Events BTNs</h2>

      <button onClick={onButtonClick}>🙏🏻 Click Me 🥺 🙏🏻</button>
      {/*Please notice that I didn't use the function with round brackets () onButtonClick()*/}
      <br/>
      <br/>
      <br/>
      <button onClick={() => onButtonClickTwo(10)}>🙏🏻 2️⃣ Click Me 2 🥺 2️ 🙏🏻</button>
      <h2>Example 2 Form</h2>
      <Form/>
      <h2>Example 3 Component for learning state</h2>
      <SomeComponentForLearningState/>
      <SomeComponentForLearningStateTwo/>
    </div>
  );
}

export default App;
