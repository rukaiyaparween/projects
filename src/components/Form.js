import React, { Component } from 'react';


class Form extends Component{

    render(){
        return(
            <div className="Form">
                <form onSubmit = {(evnt)=> this.props.handleSubmit(evnt)}>
                    <input
                        ref= {input=> input && input.focus()}
                        type="text"
                        value={this.props.inputValue}
                        onChange= {(evnt)=> this.props.handleChange(evnt)}
                    />
                </form>
            </div>
        )
    }
}


export default Form;