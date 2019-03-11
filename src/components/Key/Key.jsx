import React from "react";
import PropTypes from "prop-types";
import "./Key.css";

const Key = props => {
  const { keyAction, keyType, keyValue } = props;
  return (
    <div className="Key__container">
      <p className="Key__value">{keyValue}</p>
    </div>
  );
};

Key.propsTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired
};
export default Key;
