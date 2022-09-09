import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import * as employeeActions from "../../features/employee";
import { selectEmployee } from "../../utils/selectors";
import { getOptionsForSelect } from "../../services/formServices";

const SelectInput = (props) => {
	const { id, label } = props;
	const options = getOptionsForSelect(id);
	const dispatch = useDispatch()
	const handleChange = (e) => {
		dispatch(employeeActions.setValue(id, e.value));
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<Select options={options} menuPlacement="top" onChange={handleChange} />
		</div>
	);
};

export default SelectInput;
