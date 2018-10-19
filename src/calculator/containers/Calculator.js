import React, { Component } from 'react';
import Display from '../components/Display';
import Reset from '../components/Reset';
import Numbers from '../components/Numbers';
import Operators from '../components/Operators';
import History from '../components/History'
import './styles.css';

class Calulator extends Component {
  state = {
    displayData: '0',
    history: ['12-12', '34*12', '64-50', '12-12', '34*12']
  }

  handleClick(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="Container">
        <div className="Container-display">
          <Display
            displayData={this.state.displayData}
          />
        </div>
        <div className="Container-reset">
          <Reset
            handleClick={this.handleClick}
          />
        </div>
        <div className="Container-numbers">
          <Numbers
            handleClick={this.handleClick}
          />
        </div>
        <div className="Container-operators">
          <Operators
            handleClick={this.handleClick}
          />
        </div>
        {this.state.history.length > 0 &&
          <div className="Container-history">
            <History
              data={this.state.history}
            />
          </div>
        }        
      </div>
    )
  }
}

export default Calulator;