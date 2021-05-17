import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbarcomp from "./components/layout/Navbarcomp";
import { Container } from "react-bootstrap";
import Body from "./components/layout/Body";

function App() {
  return (
    /* Adding  Dynamic Routing - takes place while routing*/
    <BrowserRouter>
      {/* Fluid containers to make it responsive */}
      <Container fluid>
        <Navbarcomp />
        <Body />
      </Container>
    </BrowserRouter>
  );
}

export default App;
