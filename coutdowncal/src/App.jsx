// imports
import React, { Component } from 'react';
// import also css
import './app.css';

//ES6 Class App
class App extends Component {
    render() {
        return(
            <div className="App">
                <h1 className="app-title">Countdown Calender</h1>
                <div>
                    <div className="clock-days">15 days</div>
                    <div className="clock-hours">30 hours</div>
                    <div className="clock-minutes">15 minutes</div>
                    <div className="clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input placeholder="new date" />
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;
