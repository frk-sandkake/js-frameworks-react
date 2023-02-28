import React, {useState} from "react";
import jackImage from './assets/jack.jpg';
import johnyImage from './assets/johny.jpg';
import './App.css';
import VotingBtn from './components/VotingBtn'

function App() {
  const [jackVotes, setJackVotes] = useState(0);
  const [johnyVotes, setJohnyVotes] = useState(0);

  // function handleJackVotes() {
  //   setJackVotes(jackVotes + 1);
  // }

  function handleVotes(name) {
    if (name === "jack") {
      setJackVotes(jackVotes + 1);
    }

    if (name === "johny") {
      setJohnyVotes(johnyVotes + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        🥰 😄 Voting App for the king of happiness 😄 🥰
      </header>
      <main>
        <h2>Jack : {jackVotes}</h2>
        <img src={jackImage} alt="jack"/>
        {/*<button onClick={handleJackVotes}>Vote for Jack</button>*/}
        <VotingBtn handleVotes={handleVotes} name="jack"/>

        <h2>Johny : {johnyVotes}</h2>
        <img src={johnyImage} alt="johny"/>
        <VotingBtn handleVotes={handleVotes} name="johny"/>
      </main>
    </div>
  );
}

export default App;
