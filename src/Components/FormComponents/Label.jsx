import React from "react";
// import { useSelector } from "react-redux";
import ErrorToolTip from "./ErrorToolTip.jsx";


const Label = (props) => {
	const { id, label, error, children } = props;

	return (
		<div className="input-grp">
			<label htmlFor={id}>{label}</label>
			{children}
			{!!error ? <ErrorToolTip msg={error} /> : ""}
		</div>
	);
};

export default Label;
