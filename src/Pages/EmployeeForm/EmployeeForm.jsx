import React from "react";

import Form from "../../Components/Form/Form";
import { getFormStructure } from "../../services/formServices";
import FormMenu from "../../Components/FormMenu/FormMenu.jsx";
import "./EmployeeForm.scss"

const emptyEmployee = {
	firstName: "John",
	lastName: "Doe",
	dateOfBirth: new Date().setFullYear(new Date().getFullYear() - 48),
	startDate: new Date(),
	department: { label: "", value: "" },
	street: "Meta street",
	city: "Metaverse",
	state: { label: "", value: "" },
	zipCode: 66000,
};

const EmployeeForm = () => {
	const formStructure = getFormStructure();

	return (
		<section id="section-form">
			<Form employee={emptyEmployee} structure={formStructure} />
			<FormMenu />
		</section>
	);
};

export default EmployeeForm;
