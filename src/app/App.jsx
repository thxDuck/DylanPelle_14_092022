import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../utils/store";
import "./App.scss"

import RoutesApp from "./Routes.jsx";
import Loader from "../Components/Loader/Loader.jsx";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<BrowserRouter>
					<RoutesApp />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
