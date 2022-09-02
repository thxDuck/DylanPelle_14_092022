import React from "react";
import Select from "react-select";
import { getOptionsForSelect, handleSelectChange } from "../../services/formServices";

const SelectInput = (props) => {
	const { id, label } = props;
	const options = getOptionsForSelect(id);
	const handleChange = (e) => {
		handleSelectChange(id, e);
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<Select options={options} menuPlacement="top" onChange={handleChange} />
		</div>
	);
};

export default SelectInput;
