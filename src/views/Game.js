import React from 'react';
function Game() {
  return (
    <iframe
    id="unityIframe"
    title="Unity Game"
    src="/Game/index.html"
    frameBorder="0"
    scrolling="no"
    style={{ width: '100vw', height: '100vh' }}
    ></iframe>

  );
}

export default Game;
