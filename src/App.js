import React, { Component } from 'react';
import './App.css';

//import TodoList from './components/TodoList';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
    state = {
        inputValue : '',
        todos: [
            //{ value: 'clean the kitchen', done: false },
            //{ value: 'Wash the car', done: true }
        ],
        counter: 0
    }

    updateClickCount = (function ruki(){
        let counter = 0;
        //console.log("Rukaiya", counter);
        return function(){
            ++counter;
            document.querySelector("#spnCount").innerHTML = ruki(counter);
        }
    });

    handleChange = (evnt) => {
        this.setState({
            inputValue: evnt.target.value
        });
    }
    handleClick = (index) => {
       console.log("todo is submitted", index);
       const todos = this.state.todos;
       todos[index].done = !todos[index].done;
       this.setState({todos});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = {
            value: this.state.inputValue,
            done: false
        };
        const todos = this.state.todos;
        todos.push(newTodo);
        this.setState({ todos, inputValue: '' })
        //console.log('submitted');
    }

render(){
    return(
        <div className="App">
          <Form
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            inputValue = {this.state.inputValue}
          />
          <List
            todos = {this.state.todos}
            handleClick = {this.handleClick}
          />
        </div>
    );
}
}

export default App;
