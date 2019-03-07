import React from "react";
import { shallow } from "enzyme";
import Calculator from "../Calculator";
import Display from "../../Display/Display";

const setup = (props = {}) => shallow(<Calculator {...props} />);

describe("<Calculator></Calculator>", () => {
  let wrapper = null;

  beforeEach(() => (wrapper = setup({})));
  it("should render a <div></div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render <Display></Display>", () => {
    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toEqual(true);
  });
});
