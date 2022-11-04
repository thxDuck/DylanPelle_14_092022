import React from "react";

import "./CreateEmployee.scss";
import Header from "../../Components/Header/Header.jsx";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
// import data from "../../data/data";

const CreateEmployee = () => {

	return (
		<>
			<Header active="add" />
			<main className="main" id="employee-add">
				<EmployeeForm />
			</main>
		</>
	);
};

export default CreateEmployee;
