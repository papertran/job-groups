import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
class App extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/Home" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</>
		);
	}
}

export default App;
