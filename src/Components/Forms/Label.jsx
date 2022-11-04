import React, { useContext } from "react";
// import { useSelector } from "react-redux";
import ErrorToolTip from "./ErrorToolTip.jsx";

import { ErrorContext } from "../../utils/context";

const Label = (props) => {
	const { id, label, children } = props;
	const { errors } = useContext(ErrorContext);
	const error = errors[id];

	return (
		<div className="input-grp">
			<label htmlFor={id}>{label}</label>
			{children}
			{!!error ? <ErrorToolTip msg={error} /> : ""}
		</div>
	);
};

export default Label;
