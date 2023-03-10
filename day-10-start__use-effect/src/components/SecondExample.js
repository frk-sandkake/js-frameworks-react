import React, {useState, useEffect} from 'react';


const ShowingMessage = () => {

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Timer is running");
    }, 1000)

    return () => {
      clearInterval(timerId);
    }

  }, [])

  return (
    <h1>
      hello i am show message component
    </h1>
  );
};


const SecondExample = () => {
  const [showComponent, setShowComponent] = useState(true);

  function handleBtnClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {showComponent ? <ShowingMessage/> : null}
      <button onClick={handleBtnClick}>hide show component</button>
    </div>
  );
};

export default SecondExample;
