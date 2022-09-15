import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../utils/store";
import { PersistGate } from "redux-persist/integration/react";
import RoutesApp from "./Routes.jsx";
import Loader from "./Loader.jsx";

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
