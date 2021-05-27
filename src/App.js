import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Navbarcomp from "./components/layout/Navbarcomp";
import { Container } from "react-bootstrap";
import LoggedInOut from "./components/layout/LoggedInOut";

function App() {
	return (
		/* Adding  Dynamic Routing - takes place while routing*/
		<BrowserRouter>
			{/* Fluid containers to make it responsive */}
			<Container fluid>
				<Navbarcomp />
				<LoggedInOut />
			</Container>
		</BrowserRouter>
	);
}

export default App;
