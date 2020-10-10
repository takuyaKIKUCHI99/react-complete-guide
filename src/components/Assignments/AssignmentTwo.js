import React from 'react';

import Validation from './Validation';
import Char from './Char';

const assignmentTwo = (props) => (
  <div>
    <h2>Assignment 2</h2>
    <input
      type='text'
      value={props.assignmentTwoInput}
      onChange={props.change}
    />
    <p>Length: {props.assignmentTwoInput.length}</p>
    <Validation length={props.assignmentTwoInput.length} />
    {props.assignmentTwoInput.split('').map((char, index) => {
      return (
        <Char
          key={index}
          char={char}
          delete={() => props.delete(index)}
        />
      );
    })}
  </div>
);

export default assignmentTwo;
