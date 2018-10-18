import React from 'react';
import './styles.css'

const operators = ["+", "-", "*", "/", "="];

const Operators = props => (
  <div className="Operators">
    {operators.map(item =>
      <button
        className="Btn"
        key={item}
        value={item}
        onClick={props.handleClick}>
        {item}
      </button>
    )}
  </div> 
)

export default Operators;