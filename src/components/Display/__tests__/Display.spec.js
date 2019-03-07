import React from "react";
import { shallow } from "enzyme";
import Display from "../Display";

const defaultProps = {
  displayValue: ""
};
const setup = (props = {}) => shallow(<Display {...defaultProps} {...props} />);

describe("<Display></Display>", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup({})));

  it("should render a <div></div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the value of displayValue", () => {
    wrapper.setProps({ displayValue: "demo" });
    expect(wrapper.text()).toEqual("demo");
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
