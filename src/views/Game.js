import React from 'react';
function Game() {
  return (
    <div id='window'>
    <div id='outer'>
      <iframe
        title="Unity Game"
        src="/Game/index.html" // Replace with the correct path to your Unity WebGL build
      ></iframe>
      </div>
    </div>
  );
}

export default Game;
