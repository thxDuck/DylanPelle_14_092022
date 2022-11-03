import React from "react";

import "./CreateEmployee.scss";
import Header from "../../Components/Header/Header.jsx";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm.jsx";
import data from "../../data/data";

const CreateEmployee = () => {
	const employee = data.employee;

	return (
		<>
			<Header />
			<main className="main" id="employee-add">
				<EmployeeForm employee={employee} />
			</main>
		</>
	);
};

export default CreateEmployee;
