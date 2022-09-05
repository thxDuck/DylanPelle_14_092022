import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/store";

import RoutesApp from "./Routes.jsx";
const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<RoutesApp />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
