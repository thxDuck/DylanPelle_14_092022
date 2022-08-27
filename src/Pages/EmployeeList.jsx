import React from "react";

import Title from "../Components/Header.jsx";
import Nav from "../Components/Nav.jsx";
import Table from "../Components/Table.jsx";
// import { getEmployees } from "../Utils/mock";

const employeeList = () => {
	return (
		<main id="employee-list">
				<Title title="Current Employees" />
				<Table />
			<header>
				<Nav route="/" title="Home" />
			</header>
		</main>
	);
};

export default employeeList;
