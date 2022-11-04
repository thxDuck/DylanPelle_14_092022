import React from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";

const Header = () => {
	return (
		<header>
			<span className="title">
				<h1>WealthHealth</h1>
				<h2>- HR net</h2>
			</span>

			<Nav />
		</header>
	);
};

export default Header;
