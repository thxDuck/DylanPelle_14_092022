import React from "react";

import Header from "../../Components/Header/Header.jsx";
import Table from "../../Components/Table.jsx";

const employeeList = () => {
	return (
		<>
			<Header active="list" />
			<main className="main" id="employee-list">
				<Table />
			</main>
		</>
	);
};

export default employeeList;
