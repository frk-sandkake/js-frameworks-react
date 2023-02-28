import './App.css';

function App() {

  let isLoggedIn = true;
  let content;

  if (isLoggedIn) {
    content = <div>
      <h1>profile</h1>
      <ul>
        <li>Name: Jack</li>
        <li>Age: 32</li>
        <li>Phone Number: 94324234</li>
      </ul>
    </div>
  } else {
    content = <div>
      Login Form
    </div>
  }


  return (
    <div className="App">
      {content}
      {/*Ternary operator*/}
      <div>{isLoggedIn ? <div>profile component</div> : <div>Sign in Component</div>}</div>
      {/*Logical operators example*/}
      <div>{isLoggedIn && <div>profile component</div>}</div>
      <div>{!isLoggedIn && <div>Sign in Component</div>}</div>
    </div>
  );
}

export default App;
