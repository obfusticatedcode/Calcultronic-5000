import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Calculator from "../../Calculator/Calculator";

const setup = (props = {}) => shallow(<App {...props} />);
describe("<App/>", () => {
  let wrapper;
  beforeEach(() => (wrapper = setup({})));

  it("should render a <div></div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render <Calculator></Calculator>", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
