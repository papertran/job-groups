import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import Test from "./components/Test";
class App extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/Home" component={Home} />
					<Route path="/Test" component={Test} />
					<Route component={NotFound} />
				</Switch>
			</>
		);
	}
}

export default App;
