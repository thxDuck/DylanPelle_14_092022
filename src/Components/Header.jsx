import React from "react";
// import logo from "../assets/img/WealthHealth-Logo.png";

const Title = (props) => {
	const title = props.title;
	return (
		<div className="title">
			{/* <img src={logo} alt="" /> */}
			<h1>{title}</h1>
		</div>
	);
};

export default Title;
