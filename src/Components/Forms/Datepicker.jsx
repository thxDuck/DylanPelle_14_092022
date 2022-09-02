import React, { useState } from "react";
import { handleDateChange } from "../../services/formServices";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
	const { label, element } = props;
	const [startDate, setStartDate] = useState(new Date());
	return (
		<div className="input-group">
			<label htmlFor={element}>{label}</label>
			<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} onSelect={handleDateChange} />
		</div>
	);
};

export default Datepicker;
