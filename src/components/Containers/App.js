import React, { Component } from 'react';

// CSS
import classes from './App.module.css';

// Components
import Person from '../Persons/Person/Person';
// Assignments
import UserInput from '../Assignments/UserInput';
import UserOutput from '../Assignments/UserOutput';
// import AssignmentTwo from '../Assignments/AssignmentTwo';

class App extends Component {
  // State
  state = {
    persons: [
      { id: '1234', name: 'Takuya', age: '30' },
      { id: '5678', name: 'Fumiko', age: '29' }
    ],
    users: [{ userName: 'User 1' }, { userName: 'User 2' }],
    isPersonsDisplayed: true,
    // assignmentTwoInput: ''
  };

  buttonClasses = [classes.Button];

  // Event handlers
  changeNameHandler = (event, personId) => {
    const person = this.state.persons.find((person) => person.id === personId);
    if (!person) return;
    person.name = event.target.value;

    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === personId
    );
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
    this.buttonClasses.push(classes.Red);
  };

  /* ----- Assignment two ---------
  assignmentTwoChangeHandler = (event) => {
    if (!event || !event.target) return;
    this.setState({ assignmentTwoInput: event.target.value });
  };

  deleteCharCard = (index) => {
    const chars = this.state.assignmentTwoInput.split('');
    chars.splice(index, 1);
    const newInput = chars.join('');

    this.setState({ assignmentTwoInput: newInput });
  };
  -------------------------------- */

  render() {
    const persons = this.state.isPersonsDisplayed ? (
      <div>
        {this.state.persons.map((person, index) => {
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

    const separation = <div className={classes.Separation} />;

    const assignmentOne = (
      <div>
        <h2>Assignment 1</h2>
        <UserInput
          userName={this.state.users[0].userName}
          change={this.userNameChangeHandler}
        />
        <UserOutput userName={this.state.users[0].userName} />
        <UserOutput userName={this.state.users[1].userName} />
      </div>
    );

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p>It is working!!</p>

        {persons}

        <button className={this.buttonClasses.join(' ')} onClick={this.toggleDisplayPersons}>Hide cards</button>

        {separation}

        {assignmentOne}

        {separation}

        {/* <AssignmentTwo
          assignmentTwoInput={this.state.assignmentTwoInput}
          change={this.assignmentTwoChangeHandler}
          delete={this.deleteCharCard}
        /> */}
      </div>
    );
  }
}

export default App;
