import React, { useState, useEffect } from 'react';

import { socket } from './socket';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    function onConnect() {
      console.log('connected');
    }

    function onDisconnect() {
      console.log('disconnected');
    }

    function onMessage(value: any) {
      setCounter(value);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessage);
    };
  }, []);

  return <h1>Hello world {counter}</h1>;
}

export default App;
