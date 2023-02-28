function App() {
  let content;

  // Change this to true or false to change
  // what gets rendered
  let isLoggedIn = true;

  // We change the 'content' value depending
  // on the value of 'isLoggedIn'
  if (isLoggedIn) {
    content = <div>Admin dashboard</div>;
  } else {
    content = <div>Login form</div>;
  }

  // Render out the 'content' value
  return (
    <div>{content}</div>
    // Another way is to use Ternary Operator
    // <div>{isLoggedIn ? <div>Admin dashboard</div> : <div>Login form</div>}</div>

    //Short-circuiting
  // <div>{isLoggedIn && <div>Admin dashboard</div>}</div>
  );
}

export default App;
