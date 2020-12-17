import './App.css';
import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos:[
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Family Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Work meeting",
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      todo.completed = todo.id === id ? !todo.completed: todo.completed;
      return todo
    })})
  }
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
