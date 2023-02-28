<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
import  SomeComponentForLearningState from './components/SomeComponentForLearningState'
import logo from './assets/logo.svg'
>>>>>>> d4b9f92ae7f4334f8501ec0968d3f5e5d7cb83cd

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <img src={logo} alt="image fo logo" />
      <SomeComponentForLearningState/>
>>>>>>> d4b9f92ae7f4334f8501ec0968d3f5e5d7cb83cd
    </div>
  );
}

export default App;
