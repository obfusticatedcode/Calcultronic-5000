import React from "react";
import { shallow } from "enzyme";
import Calculator from "../Calculator";
import Display from "../../Display/Display";
import Keypad from "../../Keypad/Keypad";

const setup = (props = {}) => shallow(<Calculator {...props} />);

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
