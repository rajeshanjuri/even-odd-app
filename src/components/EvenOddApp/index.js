// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  // initialize the state object
  state = {count: 0}

  // get the random number
  getRandomNumber = () => Math.ceil(Math.random() * 100)

  // increment randomnumber
  onIncrement = () => {
    this.setState(prevState => {
      const randomNumber = this.getRandomNumber()

      console.log(`previous State value is ${prevState.count}`)
      return {count: prevState.count + randomNumber}
    })
  }

  render() {
    // destructuring the state object
    const {count} = this.state

    // To know even or add
    const VisibleText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Count {count} </h1>
          <p className="Even-odd">Count is {VisibleText}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
