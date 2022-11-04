import React from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";

const Header = (props) => {
	const active = props.active;

	return (
		<header>
			<span className="title">
				<h1>WealthHealth</h1>
				<h2>- HR net</h2>
			</span>

			<Nav active={active} />
		</header>
	);
};

export default Header;
