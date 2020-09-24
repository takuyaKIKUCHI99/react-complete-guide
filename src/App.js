import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Takuya", age: "30"},
      {name: "Fumiko", age: "29"}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'TK', age: '30' },
        { name: 'Fumiko', age: '29' }
      ]
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          My Hobbies: Racing
        </Person>
        <button onClick={this.switchNameHandler} >Switch Name</button>
      </div>
    );
  }
}

export default App;
