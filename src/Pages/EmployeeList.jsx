import React from "react";

import Title from "../Components/Header.jsx";
import Nav from "../Components/Nav.jsx";
import Table from "../Components/Table.jsx";
// import { getEmployees } from "../Utils/mock";

const employeeList = () => {
	return (
		<div className="main" id="employee-list">
			<Title title="Current Employees" />
			<Table />
			<Nav route="/" title="Home" />
		</div>
	);
};

export default employeeList;
