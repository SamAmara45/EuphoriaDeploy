import React from 'react';
function Game() {
  return (
    <iframe
    id="unityIframe"
    title="Unity Game"
    src="/Game/index.html"
    frameBorder="0"
    scrolling="no"
    style={{ overflow: "hidden", width: "100%", height: "100%" }}
    ></iframe>

  );
}

export default Game;
