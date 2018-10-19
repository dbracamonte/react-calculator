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
    history: []
  }

  clearDisplay = () => {
    this.setState({
      displayData: '0'
    })
  }

  isFloat = n => Number(n) === n && n % 1 !== 0;

  handleClick = (e) => {
    const data = e.target.value
    const { displayData, history } = this.state

    if(data !== '=') {
      displayData === '0' ?
        this.setState({ displayData: data }) :
        this.setState({ displayData: displayData + data })
    } else {

      let calResult = eval(displayData);
      calResult = this.isFloat(calResult) ? calResult.toFixed(2) : calResult;

      const calHistory = `${displayData}=${calResult}`;
      
      let arrayHistory = [...history, calHistory];
      arrayHistory = arrayHistory.length > 5 ? arrayHistory.splice(1) : arrayHistory;

      this.setState({
        displayData: calResult,
        history: arrayHistory
      })
    }
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
            handleClick={this.clearDisplay}
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