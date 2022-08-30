import React from "react";
import { Routes, Route } from "react-router-dom";

import EmployeeList from "../Pages/EmployeeList.jsx"
import CreateEmployee from "../Pages/CreateEmployee.jsx"
const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/list" element={<EmployeeList />} />
			<Route path="/" element={<CreateEmployee />} />
		</Routes>
	);
};

export default RoutesApp;
