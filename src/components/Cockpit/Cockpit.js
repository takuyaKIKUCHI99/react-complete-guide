import React from 'react';

import styles from './Cockpit.module.css';

const cockpit = (props) => {
  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p>It is working!!</p>

      <button
        className={props.isPersonsDisplayed ? '' : styles.red}
        onClick={props.toggle}>
        Hide cards
      </button>
    </div>
  );
};

export default cockpit;