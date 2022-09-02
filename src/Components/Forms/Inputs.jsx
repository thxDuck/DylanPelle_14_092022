import React, { useState } from "react";
import { handleInputChange } from "../../services/formServices";
import { useDispatch, useSelector } from "react-redux";
import * as employeeActions from "../../features/employee";
import { selectEmployee } from "../../utils/selectors";

const Inputs = (props) => {
	const { label, id, type } = props;
	const dispatch = useDispatch();
	const employee = useSelector(selectEmployee);
	
	const [value, setValue] = useState(employee[id]);
	console.log('EMPLOYEE : ', employee);
	
	
	const handleChange = (e) => {
		const newValue = e.target.value;
		console.log({ id });
		dispatch(employeeActions.setValue(id, newValue));
		setValue(employee[id])
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={id} value={value} onChange={handleChange} />
		</div>
	);
};

export default Inputs;
