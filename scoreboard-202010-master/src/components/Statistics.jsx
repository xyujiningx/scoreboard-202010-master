import React from 'react';


function Statistics(props) {
  const totalPlayers =props.players.length;
  let totalScore = 0;
  props.players.forEach(player => totalScore+=player.score);
  return (
    /* table.stats>tbody>tr*2>td*2 */
    <table className="stats">
      <tbody>
      <tr>
        <td>Player:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
}

export default Statistics;