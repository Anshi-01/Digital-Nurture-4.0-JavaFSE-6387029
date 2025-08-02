import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 45 },
    { name: "Gill", score: 78 },
    { name: "Dhoni", score: 60 },
    { name: "Jadeja", score: 80 },
    { name: "Pant", score: 66 },
    { name: "Bumrah", score: 72 },
    { name: "Rahul", score: 88 },
    { name: "Hardik", score: 59 },
    { name: "Surya", score: 96 },
    { name: "Shami", score: 65 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>List of Players having scores less than 70</h2>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
