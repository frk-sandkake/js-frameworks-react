import {useReducer} from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

console.log(ACTIONS.DECREMENT); // decrement
console.log(ACTIONS.INCREMENT); // increment

                  // 22    decrement
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1} // 22
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state
  }
}


const BasicExample = () => {
  const [state, dispatch] = useReducer(reducer, {count: 20})
  // it is the function we defined for the reducer
  // is my initial state

  // it return first thing is the state which is {count: 0}
  // dispatch and this dispatch is the function i will use


  function increment() {
    dispatch({type: ACTIONS.INCREMENT})
  }

  function decrement() {
    dispatch({type: ACTIONS.DECREMENT})
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default BasicExample;
