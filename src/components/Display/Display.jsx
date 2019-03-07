import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ displayValue }) => {
  return (
    <div className="Display__container">
      <p className="Display__value">{displayValue}</p>
    </div>
  );
};

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
