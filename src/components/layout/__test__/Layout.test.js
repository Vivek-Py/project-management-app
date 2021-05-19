import { Provider } from "react-redux";
import { mount } from "enzyme";

import store from "../../../Store";
import Navbarcomp from "../Navbarcomp";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

describe("Layout", () => {
  let navWrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <Navbarcomp />
      </Provider>
    </BrowserRouter>
  );

  it("Navbar Rendering", () => {
    const body = navWrapper.find(Navbar);
    expect(body).toHaveLength(1);
  });

  it("Navbrand Rendering", () => {
    const body = navWrapper.find(NavbarBrand);
    expect(body).toHaveLength(1);
  });

  it("Nav Links Rendering", () => {
    const body = navWrapper.find(Nav.Link);
    expect(body).toHaveLength(3);
  });
});
