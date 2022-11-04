import React from "react";
import { Routes, Route } from "react-router-dom";

import EmployeeForm from "../Components/EmployeeForm/EmployeeForm.jsx";
import EmployeeList from "../Components/EmployeeList/EmployeeList.jsx";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<EmployeeForm />} />
			<Route path="/list" element={<EmployeeList />} />
		</Routes>
	);
};

export default RoutesApp;
