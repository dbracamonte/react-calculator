import React, { Component } from 'react';

class Operators extends Component {
  render() {
    const operators = ["+", "-", "*", "/", "="];
    return (
      <div className="Operators">
        {operators.map(item =>
          <button
            className="Btn"
            key={item}
            value={item}
            onClick={this.props.handleClick}>
            {item}
          </button>
        )}
      </div> 
    )
  }
}

export default Operators;