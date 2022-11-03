import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li className="active">
					<Link to="/">
						Create employee
						<span className="nav-tick"></span>
					</Link>
				</li>
				<span className="vertical-separator"></span>
				<li className="">
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
