import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

// function that makes clock tick
    tick() {
        this.setState({
            date: new Date()
        });
    }
// as soon as component mounts, start timer
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
// delete times when component unmounts
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }

}
export default Clock;

