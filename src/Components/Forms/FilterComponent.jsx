import React from "react";
import styled from "styled-components";

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 5px;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;
	margin-left: 1rem;
	margin-right: 1rem;
	border: 1px solid #000;
	&:hover {
		cursor: pointer;
	}
`;

const FilterComponent = ({ filterText, onFilter }) => {
	return (
		<>
		<label htmlFor="search">Search</label>
			<TextField
				id="search"
				type="text"
				placeholder="Search employee"
				aria-label="Search Input"
				value={filterText}
				onChange={onFilter}
			/>
		</>
	);
};

export default FilterComponent;
