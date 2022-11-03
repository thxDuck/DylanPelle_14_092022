import React from "react";
import { useSelector } from "react-redux";
import ErrorToolTip from "./ErrorToolTip.jsx";
import { selectErrors } from "../../utils/selectors";

const Label = (props) => {
	const { id, label, children } = props;
	const error =  useSelector(selectErrors)[id];

	return (
		<div className="input-grp">
			<label htmlFor={id}>{label}</label>
			{children}
			{!!error ? <ErrorToolTip msg={error} /> : ""}
		</div>
	);
};

export default Label;
