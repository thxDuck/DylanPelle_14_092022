import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "../utils/store";
import { ErrorProvider } from "../services/context.jsx";
import { PersistGate } from "redux-persist/integration/react";

import "./App.scss";
import RoutesApp from "./Routes.jsx";
import Loader from "../Components/Loader/Loader.jsx";
import Header from "../Components/Header/Header.jsx";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<ErrorProvider>
					<BrowserRouter>
						<Header />
						<main>
							<RoutesApp />
						</main>
					</BrowserRouter>
				</ErrorProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
