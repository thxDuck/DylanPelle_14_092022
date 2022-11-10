import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
						Create employee
						<span className="nav-tick"></span>
					</NavLink>
				</li>

				<li className="notLi vertical-separator" aria-hidden="true"></li>

				<li>
					<NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/list">
						All employees
						<span className="nav-tick"></span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
