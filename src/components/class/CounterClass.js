import React, { Component } from 'react'

class CounterClass extends Component {
   state = {
      counter: 0
   }

   handleOnClick = () => {
      this.setState(prevState => ({
         counter: prevState.counter + 1
      }))
   }

   render() {
      return (
         <div>
            <p>Counter value is: {this.state.counter}</p>
            <button onClick={this.handleOnClick}>Increment</button>
         </div>
      )
   }
}

export default CounterClass
