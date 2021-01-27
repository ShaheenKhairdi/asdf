import React from 'react';
import { shallow,mount } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });
import ComponentName from './HeaderComponent';
import CreateEmployeeComponent from './CreateEmployeeComponent';
describe("ComponentName",()=> {
  it("should render my component", ()=> {
    const wrapper = shallow(<ComponentName />);
  });
});