import React, { useState } from "react";
import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";
import FilterComponent from "../Forms/FilterComponent.jsx";
import "./EmployeeList.scss";
import { selectAllEmployees } from "../../utils/selectors";

import { getColumns, parseEmployees } from "../../services/formServices.js";

const EmployeeList = () => {
	const employees = parseEmployees(useSelector(selectAllEmployees));
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const [filterText, setFilterText] = useState("");

	const columns = getColumns();
	const filteredItems = employees.filter(
		(item) =>
			(item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.dateOfBirth &&
				item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.startDate && item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.department && item.department.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.street && item.street.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.city && item.city.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.state && item.state.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.abbreviation &&
				item.abbreviation.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.zipCode &&
				item.zipCode.toString().toLowerCase().includes(filterText.toLowerCase()))
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		return (
			<FilterComponent
				onFilter={(e) => setFilterText(e.target.value)}
				placeholder="Coucou"
				filterText={filterText}
			/>
		);
	}, [filterText]);

	return (
		<DataTable
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			theme="solarized"
			fixedHeader
			responsive={true}
			selectableRows={false}
		/>
	);
};

export default EmployeeList;
