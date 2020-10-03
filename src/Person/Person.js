// import './Person.css';
import styled from 'styled-components';

import React from 'react';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm a person! My name is {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input value={props.name} onChange={props.change} />
    </StyledDiv>
  );
};

export default person;
