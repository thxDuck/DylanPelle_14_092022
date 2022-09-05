import React, { useState } from "react";

import { handleInputChange } from "../../services/formServices";
import { useDispatch, useSelector } from "react-redux";
import * as employeeActions from "../../features/employee";
import { selectEmployee } from "../../utils/selectors";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
	const { label, id } = props;
	const dispatch = useDispatch();
	const employee = useSelector(selectEmployee);
	const value = employee[id];

	const handleChange = (e) => {
		dispatch(employeeActions.setValue(id, e));
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<DatePicker
				selected={value}
				// onChange={handleChange}
				onSelect={handleChange}
			/>
		</div>
	);
};

export default Datepicker;
