import React from "react";
import PropTypes from "prop-types";
import Key from "../Key/Key";

import "./Keypad.css";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay
}) => {
  const numberKeys = numbers.map(number => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));
  const operatorKeys = operators.map(operator => (
    <Key
      key={operator}
      keyAction={setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));
  return (
    <div className="Keypad__container">
      <div className="Keypad__numbersContainer">{numberKeys}</div>
      <div className="Keypad__operatorsContainer">{operatorKeys}</div>
      <div className="Keypad__submitContainer">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired
};
export default Keypad;
