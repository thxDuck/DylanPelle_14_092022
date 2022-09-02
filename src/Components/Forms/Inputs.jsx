import React from "react";
import { handleInputChange } from "../../services/formServices";

const Inputs = (props) => {
	const { label, element: id, type } = props;
	const employee = {};
	const handleChange = (e) => {
		handleInputChange(id, e);
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				name={id}
				value={employee.element}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Inputs;
