import React, { useState, createContext } from "react";
import models from "../data/models";
const employeeProperties = {
	firstName: null,
	lastName: null,
	dateOfBirth: null,
	startDate: null,
	street: null,
	city: null,
	state: null,
	zipCode: null,
	department: null,
};

export const ErrorContext = createContext();
export const ErrorProvider = ({ children }) => {
	const [errors, setNewError] = useState(employeeProperties);
	const setError = (id, msg = null) => {
		setNewError({ ...errors, [id]: msg });
	};

	return <ErrorContext.Provider value={{ errors, setError }}>{children}</ErrorContext.Provider>;
};
