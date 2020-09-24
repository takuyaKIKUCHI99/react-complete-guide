import React from 'react';
import './User.css';

const userOutput = (props) => {
  const style = {
    color: 'green'
  }

  return (
    <div>
      <p style={style}>User name: {props.userName}</p>
      <p class="red-font">2</p>
    </div>
  )
};

export default userOutput;