import React from "react";

const Label = (props) => {
	const { id, label, children } = props;
	return (
		<div className="input-group">
			<label htmlFor={id}>{label}</label>
			{children}
		</div>
	);
};

export default Label;
