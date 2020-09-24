import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Takuya', age: '30' },
      { name: 'Fumiko', age: '29' }
    ],
    users: [{ userName: 'User 1' }, { userName: 'User 2' }]
  };

  switchNameHandler = (nickName) => {
    this.setState({
      persons: [
        { name: nickName, age: '30' },
        { name: 'Fumiko', age: '29' }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Takuya', age: '30' },
        { name: event.target.value, age: '29' }
      ]
    });
  };

  userNameChangeHandler = (event) => {
    this.setState({
      ...this.state,
      users: [{ userName: event.target.value }, { userName: 'User 2' }]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Kiku')}
          change={this.nameChangeHandler}>
          My Hobbies: Racing
        </Person>
        <button onClick={() => this.switchNameHandler('TK')} style={style}>
          Switch Name
        </button>

        <div className='separation' />

        <h2>Assignment 1</h2>
        <UserInput
          userName={this.state.users[0].userName}
          change={this.userNameChangeHandler}
        />
        <UserOutput userName={this.state.users[0].userName} />
        <UserOutput userName={this.state.users[1].userName} />
      </div>
    );
  }
}

export default App;
