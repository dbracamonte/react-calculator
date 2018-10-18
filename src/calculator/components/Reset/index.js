import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <div className="Reset">
        <button
          className="Btn-reset"
          value="reset"
          onClick={this.props.handleClick}>
          Reset
        </button>
      </div> 
    )
  }
}

export default Reset;