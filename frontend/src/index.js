import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import App from "./App";
// This is the url to the graphql client
const client = new ApolloClient({
	uri: "http://127.0.0.1:8000/graphql/",
});

render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
