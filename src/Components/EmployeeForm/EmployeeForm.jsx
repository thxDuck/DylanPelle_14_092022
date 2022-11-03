import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Select, { StylesConfig } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./EmployeeForm.scss";
import Label from "../Forms/Label.jsx";
import * as employeeActions from "../../features/employee";
import { getFormStructure, getOptionsForSelect } from "../../services/formServices";
import { createRandmonEmployees } from "../../utils/mock";

const EmployeeForm = (props) => {
	const employee = props.employee;
	const dispatch = useDispatch();
	const formStructure = getFormStructure();
	const getRandomEmployees = () => {
		const employees = createRandmonEmployees(100);
		employees.forEach((employee) => {
			dispatch(employeeActions.setEmployee(employee));
		});
		alert("Employees created !");
	};
	const clearEmployees = () => {
		dispatch(employeeActions.clearEmployees());
		alert("Employees removed !");
	};
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			...employee,
		},
	});

	const selectStyle = {
		control: (styles) => ({
			...styles,
			backgroundColor: "white",
			borderColor: "#005249",
			boxShadow: "unset",
			":active": {
				borderColor: "#93ad18",
				boxShadow: "0 0 0 1px #93ad18",
			},
			":hover": {
				borderColor: "#93ad18",
				boxShadow: "0 0 0 1px #93ad18",
			},
			":focus": {
				borderColor: "#93ad18",
				boxShadow: "0 0 0 1px #93ad18",
			},
		}),
		option: (styles, { isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isSelected ? "#93ad18" : undefined,
				":active": {
					backgroundColor: "#93ad18",
				},
				":hover": {
					color: "black",
					backgroundColor: "#f0f4cd",
				},
			};
		},
		input: (styles) => ({ ...styles, color: "#005249" }),
	};

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
			case "integer":
				return {
					required: true,
					valueAsNumber: true,
					positive: (v) => parseInt(v) > 0,
					setValueAs: (v) => parseInt(v),
				};
			default:
				return {
					required: true,
				};
		}
	};
	const getInput = (key, type, label = "") => {
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
				return (
					<Controller
						control={control}
						name={key}
						render={({ field }) => (
							<DatePicker
								calendarClassName="datePicker"
								onChange={(e) => field.onChange(e)}
								selected={field.value}
								closeOnScroll={true}
								locale="fr-FR"
								dateFormat="dd/MM/yyyy"
								placeholderText="01/01/2000"
								showYearDropdown
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
	const onSubmit = (data) => {
		dispatch(employeeActions.setEmployee(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{formStructure.map((info, index) => {
				return (
					<Label id={info.key} label={info.name} key={index}>
						{getInput(info.key, info.type, info.name)}
					</Label>
				);
			})}

			<button type="submit">Save</button>

			<button type="button" onClick={() => getRandomEmployees()}>
				Create 100 random employee
			</button>
			<button type="button" onClick={() => clearEmployees()}>
				Clear employee list
			</button>
		</form>
	);
};

export default EmployeeForm;
