import React, { Component } from "react";
import Display from "../Display/Display";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    displayValue: "0",
    numbers: [],
    operators: [],
    selectedOperator: "",
    storedValue: ""
  };

  callOperator = () => {
    console.log("call operation");
  };

  setOperator = () => {
    console.log("set operation");
  };

  updateDisplay = () => {
    console.log("update display");
  };

  render() {
    const {
      state: { displayValue }
    } = this;

    return (
      <div className="Calculator__container">
        <Display displayValue={displayValue} />
      </div>
    );
  }
}

export default Calculator;
