import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
	const { label, element } = props;
	const [startDate, setStartDate] = useState(new Date());
	const handleInputChange = (e) => {
		console.log({ target: e.target });
	};
	return (
		<div className="input-group">
			<label htmlFor={element}>{label}</label>
			<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
		</div>
	);
};

export default Datepicker;
