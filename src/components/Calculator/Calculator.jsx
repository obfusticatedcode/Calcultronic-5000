import React, { Component } from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

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
      state: { displayValue, numbers, operators },
      callOperator,
      setOperator,
      updateDisplay
    } = this;

    return (
      <div className="Calculator__container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={setOperator}
          updateDisplay={updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
