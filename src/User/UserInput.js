import React from 'react';

const userInput = props => {
  return (
    <input value={props.userName} onChange={props.change} />
  );
}

export default userInput;