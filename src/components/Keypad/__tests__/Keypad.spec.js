import React from "react";
import { shallow } from "enzyme";
import Keypad from "../Keypad";

const callOperator = jest.fn();
const setOperator = jest.fn();
const updateDisplay = jest.fn();
const defaultProps = {
  callOperator,
  setOperator,
  updateDisplay,
  numbers: [],
  operators: []
};
const setup = (props = {}) => shallow(<Keypad {...defaultProps} {...props} />);

describe("<Keypad></Keypad>", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup()));
  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
