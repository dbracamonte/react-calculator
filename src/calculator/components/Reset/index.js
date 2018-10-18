import React from 'react';
import './styles.css'

const Reset = props => (
  <div className="Reset">
    <button
      className="Btn-reset"
      value="reset"
      onClick={props.handleClick}>
      Reset
    </button>
  </div> 
)

export default Reset;