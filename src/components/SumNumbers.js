import React, { Component } from "react";
import { testAPI } from "./api/testApi";

class SumNumbers extends Component() {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    sum: 0,
    sumString: "The component has not updated the state",
  };

  componentDidMount() {
    console.log("We are in Component Did Mount");
    testAPI(5, 6).then((sum) => {
      this.setSum(sum);
    });
  }

  //   setSum = (sum) => {
  //     this.setState({ ...this.state, sum });
  //   };

  componentDidUpdate() {
    console.log("Component has updated");
    this.setState({ ...this.state, sumString: `${this.state.sum}` });
  }

  setSum = (sum) => {
    if (typeof sum !== "undefined") {
      this.setState({ ...this.state, sum });
    } else {
      this.setState({
        ...this.state,
        sum: this.state.firstNumber + this.state.secondNumber,
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          onChange={(e) => {
            this.setState({
              ...this.state,
              firstNumber: parseInt(e.target.value),
            });
          }}
        />
        value = {this.state.firstNumber}
        <input
          type="number"
          placeholder="Enter second number"
          onChange={(e) => {
            this.setState({
              ...this.state,
              secondNumber: parseInt(e.target.value),
            });
          }}
        />
        value = {this.state.secondNumber}
        <button onClick={(e) => this.setSum()}>Add Numbers</button>
        <h3>The sum is: {this.state.sum}</h3>
      </div>
    );
  }
}

export default SumNumbers;
