import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "../redux/store";
import "./App.scss";
import RoutesApp from "./Routes.jsx";
import Loader from "../Components/Loader/Loader.jsx";
import Header from "../Components/Header/Header.jsx";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<BrowserRouter>
					<Header />
					<main>
						<RoutesApp />
					</main>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
