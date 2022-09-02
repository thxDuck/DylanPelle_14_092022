import React from "react";
import Select from "react-select";
import { getOptionsForSelect, handleSelectChange } from "../../services/formServices";

const SelectInput = (props) => {
	const { id, label } = props;
	const options = getOptionsForSelect(id);
	
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<Select options={options} menuPlacement="top" onChange={handleSelectChange} />
		</div>
	);
};

export default SelectInput;
