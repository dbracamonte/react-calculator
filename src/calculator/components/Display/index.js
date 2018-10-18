import React from 'react';
import './styles.css'

const Display = props =>  (
  <div className="Display">
    <div className="Display-data">{props.displayData}</div>
  </div>
)

export default Display;