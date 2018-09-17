import React, { Component } from 'react';

const CounterDiv = {
    width: 130,
    height: 60,
    boderRadius: 2
}

const CounterDisplay = {
    padding: 5,
}

const counterLabel = {
    fontSize: 12
}

class OnClickCounter extends Component {
    render() {
        return (
            <div style={CounterDiv}>
                <p style={counterLabel}>Available {this.props.availability}</p>
                <button onClick={this.props.decreaseItem}>-</button>
                <span style={CounterDisplay} value={this.props.counter}>{this.props.counter}</span>
                <button onClick={this.props.incrementItem}>+</button>
            </div>
        )
    }
}

export default OnClickCounter;