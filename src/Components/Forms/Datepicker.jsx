import React, { useState } from "react";
import { handleDateChange } from "../../services/formServices";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
	const { label, id } = props;
	const [startDate, setStartDate] = useState(new Date());
	const handleChange = (e) => {
		handleDateChange(id, e);
	};
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				onSelect={handleChange}
			/>
		</div>
	);
};

export default Datepicker;
