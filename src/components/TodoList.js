import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
      super(props);
  
      this.state = {
          userInput: '',
          list: []
      }
  }
  //When the user inputs something in the input box
  changeUserInput(input){
      this.setState({
          userInput: input
      });
  }
  //adding the input text to the list on the ADD button click
  addList(input){
      let listArray = this.state.list; // making copy of the list and pushing it to the array.
      listArray.push(input);
      this.setState({
          list: listArray,
          userInput: ''
      });
    }
    enterIsPressed = (input) => {
        let listArray = this.state.list; // making copy of the list and pushing it to the array.
      listArray.push(input);
      this.setState({
          list: listArray,
          userInput: ''
      });
      this.textInput.focus();
    }
  
  render(){
      return(
          <div id="container" className="to-do-list-main">
              <div className="addingList"><input
               type="text" 
               value={this.state.userInput}
               onChange={(e) => this.changeUserInput(e.target.value)}
               onKeyPress={(e) => this.changeUserInput(e.target.value)}
               />
              <button onClick={() => this.addList(this.state.userInput)}>Add</button>
              </div>
              <div className="displayListing"><ul>
                  {this.state.list.map((value)=> <li>{value}</li>)}
              </ul>
              </div>
          </div>
      );
  }
  }
  export default TodoList;