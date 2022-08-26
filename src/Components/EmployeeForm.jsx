import React from "react";
import Input from "./Inputs.jsx";

const EmployeeForm = () => {
	const formType = {
		informations: {
			firstName: {
				label: "First Name",
				value: "First Name",
			},
			lastName: {
				label: "Last Name",
				value: "Last Name",
			},
			birthDate: {
				label: "Date of Birth",
				value: "Date of Birth",
			},
			startDate: {
				label: "Start Date",
				value: "Start Date",
			},
		},
		adress: {
			street: {
				label: "Street",
				value: "Street",
			},
			city: {
				label: "City",
				value: "City",
			},
			state: {
				label: "State",
				value: "State",
			},
			zipCode: {
				label: "Zip Code",
				value: "Zip Code",
			},
		},
		department: {
			label: "Department",
			value: "Department",
		},
	};
	const informations = Object.keys(formType.informations);
	const adress = Object.keys(formType.adress);

	// TODO : Ajouter des types ! type date, text, select...
    // TODO : Informations en array
	return (
		<form>
			{informations.map((key, index) => {
				return <Input label={formType.informations[key].label} key={key + index} />;
			})}
			<fieldset>
				<legend>Address</legend>
				{adress.map((key, index) => {
					return <Input label={formType.adress[key].label} key={key + index} />;
				})}
			</fieldset>
			<Input label={formType["department"].label} key={"department"} />
			<input type="submit" value="Save" />
		</form>
	);
};

export default EmployeeForm;
