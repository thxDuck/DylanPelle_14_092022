import React from "react";
import { handleInputChange } from "../../services/formServices";
const Inputs = (props) => {
	const { label, element, type } = props;
	const employee = {};
	return (
		<div className="input-group">
			<label htmlFor={element}>{label}</label>
			<input
				type={type}
				id={element}
				name={element}
				value={employee.element}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Inputs;
