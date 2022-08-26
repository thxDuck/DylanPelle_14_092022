import React from "react";

const Inputs = (props) => {
	const { label, element, type = "text" } = props;
	const employee = {};
	const handleInputChange = () => {};
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
