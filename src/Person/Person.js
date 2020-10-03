import classes from './Person.module.css';

import React from 'react';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm a person! My name is {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input value={props.name} onChange={props.change} />
    </div>
  );
};

export default person;
