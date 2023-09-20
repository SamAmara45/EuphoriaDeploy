import React from 'react';
import './Game.css'
function Game() {
  return (
    <div id='window'>
      <iframe
        title="Unity Game"
        src="/Game/index.html" // Replace with the correct path to your Unity WebGL build
        width="920"
        height="600"
        frameBorder="1"
      ></iframe>
      <span className='name'>
        Euphoria
      </span>
      </div>
  );
}

export default Game;
