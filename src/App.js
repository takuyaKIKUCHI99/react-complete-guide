import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Takuya', age: '30' },
      { name: 'Fumiko', age: '29' }
    ]
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'TK', age: '30' },
        { name: 'Fumiko', age: '29' }
      ]
    });
  };

  return (
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
};

export default App;
