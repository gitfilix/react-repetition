// imports
import React, { Component } from 'react';
// import also css
import './app.css';

//ES6 Class App
class App extends Component {
    constructor(props){
        super(props);

        // state : NEVER update state Directly!!
        this.state = {
            deadline: '24. December 2017',
            newDeadline: ''
        }
    }

    changeDeadline() {
        console.log('state: ', this.state);
        // update state with newDeadline
        this.setState({deadline: this.state.newDeadline});
    }


    render() {
        return(
            <div className="App">
                <h1 className="app-title">Countdown to {this.state.deadline}</h1>
                <div>
                    <div className="clock-days">15 days</div>
                    <div className="clock-hours">30 hours</div>
                    <div className="clock-minutes">15 minutes</div>
                    <div className="clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input
                        placeholder="new date"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        />
                    <button onClick={()=> this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;
