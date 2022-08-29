import React from "react";
import Select from "react-select";

const SelectInput = (props) => {
	const raw_options = props.options;
	const { id, label } = props;
	const options = raw_options.map((k) => ({ value: k, label: k }));
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<Select options={options} menuPlacement="top" />
		</div>
	);
};

export default SelectInput;
