import React from 'react';

const validationComponent = (props) => {
  const message = props.length < 5 ? "Text too short" : "Text long enough";
  return <p>{ message }</p>;
};

export default validationComponent;
