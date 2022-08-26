import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
	const { title, route } = props;
	return (
		<nav>
			<Link to={route}>{title}</Link>
		</nav>
	);
};

export default Nav;
