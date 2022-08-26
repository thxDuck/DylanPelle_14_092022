import React from "react";

import Title from "../Components/Header.jsx";
import Nav from "../Components/Nav.jsx";
import EmployeeForm from "../Components/EmployeeForm.jsx";
import {fillEmployeeList} from '../Utils/mock';



const CreateEmployee = () => {
	return (
		<main id="employee-add">
			<header>
				<Title title="HRnet" />
				<Nav title="View current Employees" route="/list"/>
			</header>
			<h2>Create Employee</h2>
			<EmployeeForm />
		</main>
	);
};

export default CreateEmployee;
