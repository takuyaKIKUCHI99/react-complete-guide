import React, { useEffect, useRef } from 'react';

import styles from './Cockpit.module.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, [])

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p>It is working!!</p>

      <button
        ref={toggleBtnRef}
        className={props.isPersonsDisplayed ? '' : styles.red}
        onClick={props.toggle}>
        Hide cards
      </button>
    </div>
  );
};

export default Cockpit;