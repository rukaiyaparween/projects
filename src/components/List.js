import React, { Component } from 'react';
import Task from './Task';

class List extends Component{

    render(){
        return(
            <div className="List">
                {this.props.todos.map((todo, index)=> {
                    return (
                        <Task
                            index={index}
                            key={index} 
                            todo={todo}
                            handleClick= {this.props.handleClick}
                        />
                    );
                })}
            </div>
        )
    }
}


export default List;