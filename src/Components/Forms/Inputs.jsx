import React from "react";

const Inputs = (props) => {
	const { label, element, type } = props;
	const employee = {};
	const handleInputChange = (e) => {
		console.log({ target: e.target });
	};
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
