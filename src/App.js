import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name="Takuya" age="30" />
      <Person name="Fumiko" age="29" />
    </div>
  );
}

export default App;
