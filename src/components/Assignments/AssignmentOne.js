import React from 'react';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

const assignmentOne = (props) => (
  <div>
    <h2>Assignment 1</h2>
    <UserInput
      userName={props.users[0].userName}
      change={props.change}
    />
    <UserOutput userName={props.users[0].userName} />
    <UserOutput userName={props.users[1].userName} />
  </div>
);

export default assignmentOne;
