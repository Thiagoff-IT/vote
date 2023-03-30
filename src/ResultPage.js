import React from 'react';

function ResultPage({ candidateVotes }) {
  const winner = Object.keys(candidateVotes).reduce(
    (a, b) => (candidateVotes[a] > candidateVotes[b] ? a : b)
  );

  return (
    <div>
      <h1>Resultado da votação</h1>
      <ul>
        {Object.entries(candidateVotes).map(([candidate, votes]) => (
          <li key={candidate}>
            {candidate}: {votes} votos
          </li>
        ))}
      </ul>
      <p>O vencedor é o {winner} com {candidateVotes[winner]} votos!</p>
    </div>
  );
}

export default ResultPage;
