import React from "react";
import { mount, shallow } from "enzyme";
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
const mountedSetup = (props = {}) =>
  mount(<Keypad {...defaultProps} {...props} />);

describe("<Keypad></Keypad>", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup({})));
  it("should render 4 <div></div> s", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render an instance of the <Key/> for each index of numbers, operators, and the submit Key", () => {
    const numbers = ["0", "1"];
    const operators = ["+", "-"];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key").length).toEqual(keyTotal);
  });
});

describe("mounted <Keypad/>", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mountedSetup({});
  });
  it("should render the values of numbers", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".Keypad__numbersContainer").text()).toEqual("012");
  });

  it("should render the values of operators", () => {
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(wrapper.find(".Keypad__operatorsContainer").text()).toEqual("+-*/");
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
