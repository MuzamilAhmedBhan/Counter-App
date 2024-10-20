// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state

  const increment = () => {
    setCount(count + 1); // Increment count
  };

  const decrement = () => {
    setCount(count - 1); // Decrement count
  };

  const reset = () => {
    setCount(0); // Reset count to 0
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Counter;
