import React, { useState } from "react";
import { handleInputChange } from "../../services/formServices";
import { useDispatch, useSelector } from "react-redux";
import * as employeeActions from "../../features/employee";
import { selectEmployee } from "../../utils/selectors";

const Inputs = (props) => {
	const { label, id, type } = props;
	const dispatch = useDispatch();
	const employee = useSelector(selectEmployee);
	const value = employee[id]
	
	
	const handleChange = (e) => {
		dispatch(employeeActions.setValue(id, e.target.value));
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={id} value={value} onChange={handleChange} />
		</div>
	);
};

export default Inputs;
