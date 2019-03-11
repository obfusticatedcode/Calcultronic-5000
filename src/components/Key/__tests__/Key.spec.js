import React from "react";
import { shallow } from "enzyme";
import Key from "../Key";

const keyAction = jest.fn();
const defaultProps = {
  keyAction,
  keyType: "",
  keyValue: ""
};
const setup = (props = {}) => shallow(<Key {...defaultProps} {...props} />);

describe("<Key/>", () => {
  let wrapper = null;
  beforeEach(() => (wrapper = setup({})));
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the value of keyValue", () => {
    wrapper.setProps({ keyValue: "demo" });
    expect(wrapper.text()).toEqual("demo");
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
