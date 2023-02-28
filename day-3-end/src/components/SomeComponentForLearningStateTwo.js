import React, {useState} from "react";

function SomeComponentForLearningStateTwo() {

  const [state, setState] = useState({count: 4, theme: 'yellow'})

  const count = state.count;
  const theme = state.theme;

  function handleDecrementCount() {
    setState((prevState) => {
      return ({...prevState, count: prevState.count - 1})
    });
  }

  function handleIncrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    });
  }


  return (
    <div className="SomeComponentForLearningStateTwo">
      <>
        <button onClick={handleDecrementCount}>-</button>
        {/*<span>0</span>*/}
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={handleIncrementCount}>+</button>
      </>
    </div>
  );
}

export default SomeComponentForLearningStateTwo;
