import React from "react";
import Select from "react-select";
import { getOptionsForSelect } from "../../services/services";

const SelectInput = (props) => {
	const { id, label } = props;
	const options = getOptionsForSelect(id);
	console.log({ options });
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<Select options={options} menuPlacement="top" />
		</div>
	);
};

export default SelectInput;
