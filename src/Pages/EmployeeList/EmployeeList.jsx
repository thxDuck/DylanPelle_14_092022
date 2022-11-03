import React from "react";

import Header from "../../Components/Header/Header.jsx";
import Nav from "../../Components/Nav/Nav.jsx";
import Table from "../../Components/Table.jsx";

const employeeList = () => {
	return (
		<div className="main" id="employee-list">
			<Header/>
			<Table />
			<Nav/>
		</div>
	);
};

export default employeeList;
