import { Provider } from "react-redux";
import { mount } from "enzyme";

import store from "../Store";
import Navbarcomp from "../components/layout/Navbarcomp";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

describe("Layout", () => {
  let navWrapper = mount(
    <Provider store={store}>
      <Navbarcomp />
    </Provider>
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
    expect(body).toHaveLength(0);
  });
});
