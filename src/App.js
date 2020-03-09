import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todolist from './components/Todolist';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    Todolist: [
        {
            id: uuid.v4(),
            title: 'Faire les courses',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Faire le ménage',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Sortir les poubelles',
            completed: false
        }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.Todolist.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ Todolist: [...this.state.Todolist.filter(todo => todo.id !==id)]
     });
  }

  //AddTodo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    // console.log(title)
    this.setState({ Todolist: [...this.state.Todolist, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todolist Todolist={this.state.Todolist} 
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
