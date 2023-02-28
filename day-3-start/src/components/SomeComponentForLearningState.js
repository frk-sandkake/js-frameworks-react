import React, {useState} from "react";

function SomeComponentForLearningState() {
  const [count, setCount] = useState(10); // array
  // 1. value
  // 2. function to use to update your value vm

  function handleIncrementCount() {
    console.log("you clicked the plus +");
    setCount(count + 1);
  }

  function handleDecrementCount() {
    console.log("i clicked the - ");
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  )
}

export default SomeComponentForLearningState
