import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getOptionsForSelect } from "../../scripts/formServices";
import { selectStyle } from "./selectStyle.js";

const Input = (props) => {
	const { formKey, type, name, value, register, control } = props;

	const registerOptions = (type) => {
		switch (type) {
			case "text":
				return {
					minLength: 2,
					maxLength: 100,
					required: true,
				};
			case "date":
				return {
					valueAsDate: true,
					required: true,
				};
			case "select":
				return {
					required: true,
				};
			case "integer":
				return {
					required: true,
					valueAsNumber: true,
					positive: (n) => parseInt(n) > 0,
					setValueAs: (n) => parseInt(n),
				};
			default:
				return {
					required: true,
				};
		}
	};
	const getInput = (key, type, label = "", value) => {
		switch (type) {
			case "string":
				return (
					<input
						id={key}
						name={key}
						type="text"
						{...register(key, registerOptions("text"))}
					/>
				);
			case "number":
				return (
					<input
						id={key}
						name={key}
						type="number"
						{...register(key, registerOptions("number"))}
					/>
				);
			case "date":
				let maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2));
				let maxYearItems = 10;
				if (key === "dateOfBirth") {
					maxYearItems = 50;
					maxDate = new Date();
				}
				return (
					<Controller
						control={control}
						name={key}
						render={({ field }) => (
							<DatePicker
								calendarClassName="datePicker"
								onChange={(e) => field.onChange(e)}
								placeholderText="01/01/2000"
								selected={field.value}
								maxDate={maxDate}
								showYearDropdown
								yearDropdownItemNumber={maxYearItems}
								scrollableYearDropdown
							/>
						)}
					/>
				);
			case "select":
				return (
					<Controller
						control={control}
						name={key}
						render={({ field }) => (
							<Select
								placeholderText={label}
								inputId={key}
								options={getOptionsForSelect(key)}
								menuPlacement="top"
								onChange={(e) => field.onChange(e)}
								selected={field.value}
								styles={selectStyle}
							/>
						)}
					/>
				);
			default:
				break;
		}
	};

	return <>{getInput(formKey, type, name, value)}</>;
};

export default Input;
