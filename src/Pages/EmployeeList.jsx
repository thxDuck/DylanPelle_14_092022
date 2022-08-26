import React from "react";

import Title from "../Components/Header.jsx";
import Nav from "../Components/Nav.jsx";
import Table from "../Components/Table.jsx";
import EmployeeForm from "../Components/EmployeeForm.jsx";
import { fillEmployeeList } from "../Utils/mock";

const employeeList = () => {
	return (
		<main>
			<header>
				<Title title="Current Employees" />
				<Table />
				<Nav route="/" title="Home" />
			</header>
		</main>
	);
};

export default employeeList;
