import React, { Component } from 'react';

class Numbers extends Component {
  render() {
    const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
    return (
      <div className="Numbers">
        {numbers.map(item =>
          <button
            className="Btn-number"
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

export default Numbers;