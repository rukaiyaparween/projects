import React, { Component } from 'react';

class Closure extends Component {

    render(){
        return(
            <div>
                <button onClick={this.props.updateClickCount}>Click me</button>
                <div>You have clicked <span id="spnCount"> 0</span> times! </div>
            </div>
        );
    }
}

export default Closure;