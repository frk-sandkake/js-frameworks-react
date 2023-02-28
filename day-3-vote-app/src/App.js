import React, {useState} from "react";
import './App.css';
import Heading from "./components/Heading";
import JohnnyVote from "./voteComponent/JohnnyVote";
import JackVote from "./voteComponent/JackVote";
import VotingBtn from "./components/VotingBtn";

function App() {
    const [jackVote, setJackVote] = useState(0);
    const [johnnyVote, setJohnnyVote] = useState(0);

    function handleVotes(name) {
        if (name === "Johnny") {
            setJohnnyVote(johnnyVote + 1);
        }if (name === "Jack") {
            setJackVote(jackVote + 1);
        }
    }

  return (
    <div className="App">
      <header className="App-header">
          <Heading color="purple" fontSize="50" />
      </header>
        <main>
            <JohnnyVote />
            <VotingBtn handleVote={} name="Johnny" />
            <JackVote />
            <VotingBtn name="Jack" />
        </main>
    </div>
  );
}

export default App;
