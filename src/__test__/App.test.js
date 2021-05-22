import App from "../App";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  let appWrapper = shallow(<App />);

  it("BrowserRouter render", () => {
    const body = appWrapper.find(BrowserRouter).length;
    expect(body).toBe(1);
  });

  it("render", () => {
    const body = appWrapper.find(BrowserRouter).length;
    expect(body).toBe(1);
  });
});
