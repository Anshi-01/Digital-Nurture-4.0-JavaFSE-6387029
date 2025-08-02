import React from 'react';

const IndianPlayers = () => {
  const players = ["Kohli", "Rohit", "Gill", "Iyer", "Pant", "Jadeja"];

  const oddPlayers = players.filter((_, i) => i % 2 !== 0);
  const evenPlayers = players.filter((_, i) => i % 2 === 0);

  const T20players = ["Virat", "Rohit", "Surya"];
  const RanjiPlayers = ["Pujara", "Rahane", "Shaw"];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>List of Indian Players Merged</h2>
      <ul>{mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
