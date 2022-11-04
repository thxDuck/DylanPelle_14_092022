import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = (props) => {
	const active = props.active;

	console.log({ active });
	return (
		<nav>
			<ul>
				<li className={active === "add" ? "active" : ""}>
					<Link to="/">
						Create employee
						<span className="nav-tick"></span>
					</Link>
				</li>
				<span className="vertical-separator"></span>
				<li className={active === "list" ? "active" : ""}>
					<Link to="/list">
						All employees
						<span className="nav-tick"></span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
