import React from "react";
import { Routes, Route } from "react-router-dom";

// import EmployeeForm from "../Components/EmployeeForm/EmployeeForm.jsx"
import EmployeeList from "../Pages/EmployeeList/EmployeeList.jsx"
import CreateEmployeePage from "../Pages/CreateEmployee/CreateEmployee"

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<CreateEmployeePage />} />
			{/* <Route path="/" element={<EmployeeForm />} /> */}
			<Route path="/list" element={<EmployeeList/>} />
		</Routes>
	);
};

export default RoutesApp;
