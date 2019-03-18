import React from "react";
import { shallow, mount } from "enzyme";
import Calculator from "../Calculator";
import Display from "../../Display/Display";
import Keypad from "../../Keypad/Keypad";

const setup = (props = {}) => shallow(<Calculator {...props} />);
const mountedSetup = (props = {}) => mount(<Calculator {...props} />);

describe("<Calculator></Calculator>", () => {
  let wrapper = null;

  beforeEach(() => (wrapper = setup({})));
  it("should render a <div></div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render <Display></Display> and <Keypad></Keypad>", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Display displayValue={wrapper.instance().state.displayValue} />,
        <Keypad
          callOperator={wrapper.instance().callOperator}
          numbers={wrapper.instance().state.numbers}
          operators={wrapper.instance().state.operators}
          setOperator={wrapper.instance().setOperator}
          updateDisplay={wrapper.instance().updateDisplay}
        />
      ])
    ).toEqual(true);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mounted <Calculator/>", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = mountedSetup({})));

  it("should call updateDisplay() when a number key is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "updateDisplay");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(".Key__numberKey")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should call setOperator() when a number key is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "setOperator");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(".Key__operatorKey")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should call updateDisplay() when a number key is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "updateDisplay");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(".Key__numberKey")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should call callOperator() when a number key is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "callOperator");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(".Key__submitKey")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("updateDisplay()", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup()));
  it("should update displayValue", () => {
    wrapper.instance().updateDisplay("5");
    expect(wrapper.state("displayValue")).toEqual("5");
  });

  it("should concatenate displayValue", () => {
    wrapper.instance().updateDisplay("5");
    wrapper.instance().updateDisplay("0");
    expect(wrapper.state("displayValue")).toEqual("50");
  });

  it("should remove leading `0` from displayValue", () => {
    wrapper.instance().updateDisplay("0");
    expect(wrapper.state("displayValue")).toEqual("0");
    wrapper.instance().updateDisplay("5");
    expect(wrapper.state("displayValue")).toEqual("5");
  });

  it("should prevent multiple leading `0`s from displayValue", () => {
    wrapper.instance().updateDisplay("0");
    wrapper.instance().updateDisplay("0");
    expect(wrapper.state("displayValue")).toEqual("0");
  });

  it("should remove last character from displayValue", () => {
    wrapper.instance().updateDisplay("5");
    wrapper.instance().updateDisplay("0");
    wrapper.instance().updateDisplay("ce");
    expect(wrapper.state("displayValue")).toEqual("5");
  });

  it("should prevent multiple instances of `.` in displayValue", () => {
    wrapper.instance().updateDisplay(".");
    wrapper.instance().updateDisplay(".");
    expect(wrapper.state("displayValue")).toEqual(".");
  });

  it("will set displayValue to `0` if displayValue is equal to an empty string", () => {
    wrapper.instance().updateDisplay("ce");
    expect(wrapper.state("displayValue")).toEqual("0");
  });
});

describe("setOperator", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup({})));
  it("should update the value of selectedOperator", () => {
    wrapper.instance().setOperator("+");
    expect(wrapper.state("selectedOperator")).toEqual("+");
    wrapper.instance().setOperator("/");
    expect(wrapper.state("selectedOperator")).toEqual("/");
  });

  it("should update the value of storedValue to the value of the displayValue", () => {
    wrapper.setState({ displayValue: "5" });
    wrapper.instance().setOperator("+");
    expect(wrapper.state("storedValue")).toEqual("5");
  });

  it("selectedOperator is NOT an empty string, does not update storedValue", () => {
    wrapper.setState({ displayValue: "5" });
    wrapper.instance().setOperator("+");
    expect(wrapper.state("storedValue")).toEqual("5");
    wrapper.instance().setOperator("-");
    expect(wrapper.state("storedValue")).toEqual("5");
  });
});

describe("callOperator()", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup({})));
  it("it should update displayValue to the sum of storedValue and displayValue", () => {
    wrapper.setState({ storedValue: "3" });
    wrapper.setState({ displayValue: "2" });
    wrapper.setState({ selectedOperator: "+" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("5");
  });
  it("it should update displayValue to the difference of storedValue and displayValue", () => {
    wrapper.setState({ storedValue: "3" });
    wrapper.setState({ displayValue: "2" });
    wrapper.setState({ selectedOperator: "-" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("1");
  });
  it("it should update displayValue to the product of storedValue and displayValue", () => {
    wrapper.setState({ storedValue: "3" });
    wrapper.setState({ displayValue: "2" });
    wrapper.setState({ selectedOperator: "x" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("6");
  });
  it("it should update displayValue to the quotient of storedValue and displayValue", () => {
    wrapper.setState({ storedValue: "3" });
    wrapper.setState({ displayValue: "2" });
    wrapper.setState({ selectedOperator: "/" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("1.5");
  });
  it("it should update displayValue to `0` if operation results in `Infinity`", () => {
    wrapper.setState({ storedValue: "7" });
    wrapper.setState({ displayValue: "0" });
    wrapper.setState({ selectedOperator: "/" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("0");
  });
  it("it should update displayValue to `0` if selectedOperatror does not match cases", () => {
    wrapper.setState({ storedValue: "7" });
    wrapper.setState({ displayValue: "10" });
    wrapper.setState({ selectedOperator: "string" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("0");
  });
  it("it should update displayValue to `0` if called with no value for storedValue or selectedOperator", () => {
    wrapper.setState({ storedValue: "" });
    wrapper.setState({ displayValue: "10" });
    wrapper.setState({ selectedOperator: "" });
    wrapper.instance().callOperator();
    expect(wrapper.state("displayValue")).toEqual("0");
  });
});
