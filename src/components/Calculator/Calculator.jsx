import React, { Component } from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

import "./Calculator.css";

class Calculator extends Component {
  state = {
    displayValue: "0",
    numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"],
    operators: ["/", "x", "-", "+"],
    selectedOperator: "",
    storedValue: ""
  };

  callOperator = () => {
    console.log("call operation");
  };

  setOperator = value => {
    let {
      state: { displayValue, selectedOperator, storedValue }
    } = this;

    if (selectedOperator === "") {
      storedValue = displayValue;
      displayValue = "0";
      selectedOperator = value;
    } else {
      selectedOperator = value;
    }
    this.setState({ displayValue, selectedOperator, storedValue });
  };

  updateDisplay = value => {
    let {
      state: { displayValue }
    } = this;
    if (value === "." && displayValue.includes(".")) {
      value = "";
    }
    if (value === "ce") {
      displayValue = displayValue.substr(0, displayValue.length - 1);
      if (displayValue === "") {
        displayValue = "0";
      }
    } else {
      displayValue === "0" ? (displayValue = value) : (displayValue += value);
    }
    this.setState(() => ({ displayValue }));
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
