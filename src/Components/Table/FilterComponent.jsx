import React from "react";
import ActionMenu from "../ActionMenu/ActionMenu";

const styles = {
	height: "32px",
	width: "200px",
	padding: "0 32px 0 16px",
	border: "1px solid #000",
	borderRadius: "5px",
	marginLeft: "1rem",
	marginRight: "1rem",
	"&:hover": {
		cursor: "pointer",
	},
};

const FilterComponent = ({ filterText, onFilter }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				flexWrap: "wrap",
				width: "100%",
				gap: "0.5rem",
			}}>
			<ActionMenu />
			<div style={{ display: "flex" }}>
				<label htmlFor="search">Search</label>
				<input
					id="search"
					type="text"
					placeholder="Search employee"
					aria-label="Search Input"
					value={filterText}
					onChange={onFilter}
					style={styles}
				/>
			</div>
		</div>
	);
};

export default FilterComponent;
