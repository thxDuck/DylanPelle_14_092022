import React from "react";
import Input from "./Forms/Inputs.jsx";
import SelectInput from "./Forms/SelectInput.jsx";
import Datepicker from "./Forms/Datepicker.jsx";

import { getFormInformations } from "../services/services.js";
const EmployeeForm = () => {
	const form = getFormInformations();
	console.log({ department: form.department });
	return (
		<form>
			{form.informations.map((item, index) => {
				switch (item.type) {
					case "select":
						return (
							<SelectInput
								key={item.key}
								id={item.key}
								label={item.label}
								type={item.type}
							/>
						);
					case "date":
						return (
							<Datepicker
								key={item.key}
								id={item.key}
								label={item.label}
								type={item.type}
							/>
						);
					default:
						return (
							<Input
								key={item.key}
								id={item.key}
								label={item.label}
								type={item.type}
							/>
						);
				}
			})}
			<fieldset>
				<legend>Address</legend>
				{form.address.map((item, index) => {
					switch (item.type) {
						case "select":
							return (
								<SelectInput
									key={item.key}
									id={item.key}
									label={item.label}
									type={item.type}
								/>
							);
						case "date":
							return (
								<Datepicker
									key={item.key}
									id={item.key}
									label={item.label}
									type={item.type}
								/>
							);
						default:
							return (
								<Input
									key={item.key}
									id={item.key}
									label={item.label}
									type={item.type}
								/>
							);
					}
				})}
			</fieldset>

			<SelectInput
				key={form.department.key}
				id={form.department.key}
				label={form.department.label}
				type={form.department.type}
			/>
			<input type="submit" className="submit" value="Save" />
		</form>
	);
};

export default EmployeeForm;
