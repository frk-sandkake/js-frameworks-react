import React, {useState} from "react";

function SomeComponentForLearningState() {
  // to use them we need to useState function

//1.
  // const someArray  = useState(4) //  this will always return an array // 4 is the default value

  // we will not write them as an array, but we destructor the data
  // useState always returns an array with two values

  // 2.  The first value your useState will return is your state
  // the second thing it will return is a function which allow us to update our state

  // current state  , the function which allows you to update that current state
  const [count, setCount] = useState(4) // You can call the state and the function any name you want
  // this will run everyone use the component


  // this will run once when the component is on the page
  // const [count, setCount] = useState(() => {
  //   return 4;
  // })



// 3. how to use setCount
  //  add an onClick on the  - BTN
  //

  function handleDecrementCount() {
// we will call that setCount function which allow us to update our state
    setCount(count - 1); // way one

    // setCount(prevState =>  prevState -1); // this way is better
  }

  function handleIncrementCount() {
// we will call that setCount function which allow us to update our state
    setCount(count + 1);
  }


  // show another way to pass the state go up to line 17
  return (
    <div className="SomeComponentForLearningState">
      <>
        <button onClick={handleDecrementCount}>-</button>
        {/*<span>0</span>*/}
        <span>{count}</span>
        <button onClick={handleIncrementCount}>+</button>
      </>
    </div>
  );
}

export default SomeComponentForLearningState;
