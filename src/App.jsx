import React, { useState } from 'react';
import './App.css';
import ResultPage from './ResultPage';

function App() {
  const [candidateVotes, setCandidateVotes] = useState({
    'Candidato A': 0,
    'Candidato B': 0,
    'Candidato C': 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleVote = (candidate) => {
    setCandidateVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  const handleFinishCount = () => {
    setShowResults(true);
  };

  return (
    <div className='App'>
      {showResults ? (
        <ResultPage candidateVotes={candidateVotes} />
      ) : (
        <>
          <h1>Sistema de votação</h1>
          <ul>
            {Object.entries(candidateVotes).map(([candidate, votes]) => (
              <li key={candidate}>
                {candidate}: {votes} votos
                <button onClick={() => handleVote(candidate)}>Votar</button>
              </li>
            ))}
          </ul>
          <button onClick={handleFinishCount}>Finalizar contagem</button>
        </>
      )}
    </div>
  );
}

export default App;
