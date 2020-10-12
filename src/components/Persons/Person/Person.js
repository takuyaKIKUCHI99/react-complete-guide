import classes from './Person.module.css';

import React from 'react';

import PropTypes from 'prop-types';

const Person = (props) => {
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
