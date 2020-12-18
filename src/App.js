import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import About from './components/pages/About'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends React.Component {
  state = {
    todos:[
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Family Dinner",
        completed: false
      },
      {
        id: uuid(),
        title: "Work meeting",
        completed: false
      },
    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      todo.completed = todo.id === id ? !todo.completed: todo.completed;
      return todo
    })})
  }
  
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
              </React.Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
