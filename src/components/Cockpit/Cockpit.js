import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const buttonClasses = [classes.Button];
  if (!props.persons.length) buttonClasses.push('red');

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p>It is working!!</p>

      <button
        className={buttonClasses.join(' ')}
        onClick={props.toggle}>
        Hide cards
      </button>
    </div>
  );
};

export default cockpit;