function VotingBtn({handleVote, name}) {


  return (
    <div>
      <button onClick={() => handleVotes(name)}>Vote for {name}</button>
    </div>
  );
}

export default VotingBtn;
