import React from "react";

import Form from "../../Components/Form/Form";
import { getFormStructure } from "../../scripts/formServices";
import "./EmployeeForm.scss"

const emptyEmployee = {
	firstName: "John",
	lastName: "Doe",
	dateOfBirth: new Date().setFullYear(new Date().getFullYear() - 48),
	startDate: new Date(),
	department: { label: "", value: "" },
	street: "Boulevard du Roi René",
	city: "Angers",
	state: { label: "", value: "" },
	zipCode: 49000,
};

const EmployeeForm = () => {
	const formStructure = getFormStructure();

	return (
		<section id="section-form">
			<Form employee={emptyEmployee} structure={formStructure} />
		</section>
	);
};

export default EmployeeForm;