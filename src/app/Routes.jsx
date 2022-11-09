import React from "react";
import { Routes, Route } from "react-router-dom";

import EmployeeForm from "../Pages/EmployeeForm/EmployeeForm.jsx";
import EmployeeList from "../Pages/EmployeeList/EmployeeList.jsx";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<EmployeeForm />} />
			<Route path="/list" element={<EmployeeList />} />
		</Routes>
	);
};

export default RoutesApp;
