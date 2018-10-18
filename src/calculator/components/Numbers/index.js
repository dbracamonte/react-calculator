import React from 'react';
import './styles.css';

const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

const Numbers = props => (
  <div className="Numbers">
    {numbers.map(item =>
      <button
        className="Btn-number"
        key={item}
        value={item}
        onClick={props.handleClick}>
        {item}
      </button>
    )}
  </div> 
)

export default Numbers;