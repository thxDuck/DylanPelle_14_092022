import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent.jsx";
import { getEmployees } from "../Utils/mock";
import { getColumns } from "../services/formServices.js";

const employees = getEmployees(1000);

const Table = () => {
	const [filterText, setFilterText] = useState("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

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
			(item.zipCode && item.zipCode.toLowerCase().includes(filterText.toLowerCase()))
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText("");
			}
		};

		return (
			<FilterComponent
				onFilter={(e) => setFilterText(e.target.value)}
				onClear={handleClear}
				filterText={filterText}
			/>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<DataTable
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			// persistTableHead
		/>
	);
};

export default Table;
