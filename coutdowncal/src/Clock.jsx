import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        // inital states
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    // update every second - componentDidMount
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    // dynamic time until deadline
    getTimeUntil(deadline) {
        let time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time', time);
        let seconds = Math.floor((time / 1000) %60);
        let minutes = Math.floor((time / 1000 / 60) %60);
        let hours = Math.floor(time /(1000 *60 *60) %24);
        let days = Math.floor(time / (1000 *60 *60 *24));

        console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
        //update the state
        this.setState({days: days, minutes: minutes, hours: hours, seconds: seconds});
        // ES shorthand
        // this.setState({days, minutes, hours, seconds});
    }

    render() {
        // this.getTimeUntil(this.props.deadline);

        return(
            <div>
                <div className="clock-days">{this.state.days} days</div>
                <div className="clock-hours">{this.state.hours} hours</div>
                <div className="clock-minutes">{this.state.minutes} minutes</div>
                <div className="clock-seconds">{this.state.seconds} seconds</div>
            </div>
        )
    }
}


export default Clock;
