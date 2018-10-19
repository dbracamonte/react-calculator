import React from 'react';
import './styles.css'

const History = props => (
  <div className="Histroy">
    <h4 className="Title">History</h4>
    <ul>
      {props.data.map((item, index) =>
        <li
          key={`h-` + index}>
          {item}
        </li>
      )}
    </ul>
  </div>
)

export default History;