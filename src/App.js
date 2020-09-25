import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: '1234', name: 'Takuya', age: '30' },
      { id: '5678', name: 'Fumiko', age: '29' }
    ],
    users: [{ userName: 'User 1' }, { userName: 'User 2' }],
    isPersonsDisplayed: true
  };

  changeNameHandler = (event, personId) => {
    const person = this.state.persons.find(person => person.id === personId);
    if (!person) return;
    person.name = event.target.value;

    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(person => person.id === personId);
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons].splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  userNameChangeHandler = (event) => {
    this.setState({
      users: [{ userName: event.target.value }, { userName: 'User 2' }]
    });
  };

  toggleDisplayPersons = () => {
    this.setState({ isPersonsDisplayed: !this.state.isPersonsDisplayed });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const persons = this.state.isPersonsDisplayed ?
      (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                change={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      ) : null;

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        { persons }
        <button onClick={this.toggleDisplayPersons} style={style}>
          Hide cards
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
