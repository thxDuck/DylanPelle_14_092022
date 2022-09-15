import React from "react";

const ErrorToolTip = (props) => {
	const { msg } = props;
	return <div style={{color: "red"}}>{msg}</div>;
};

export default ErrorToolTip;
