import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Label from "./Forms/Label.jsx";
import data from "../data/data";
import * as employeeActions from "../features/employee";
import { getFormStructure, getOptionsForSelect } from "../services/formServices";
const EmployeeForm = () => {
	const dispatch = useDispatch();
	const alphanumericRegexp = /[^a-z0-9]/gi;
	const form = getFormStructure();

	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			...data.employee,
		},
	});
	const registerOptions = (type) => {
		switch (type) {
			case "text":
				return {
					// validate: (value) => value.replace(alphanumericRegexp, ""),
					minLength: 2,
					maxLength: 50,
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

	const getInput = (key, label, type) => {
		switch (type) {
			case "text":
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
								placeholderText="01/01/2000"
								onChange={(e) => field.onChange(e)}
								selected={field.value}
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
							/>
						)}
					/>
				);

			default:
				break;
		}
	};

	const onSubmit = (data) => {
		console.log({ data });
		// TODO : Dispatch event to set new employee !
		// TODO : Set errors !
		dispatch(employeeActions.setEmployee(data))
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{form.informations.map((info) => {
				const { key, name, type } = info;
				return (
					<Label id={key} label={name} key={key}>
						{getInput(key, name, type)}
					</Label>
				);
			})}

			<fieldset>
				<legend>Address</legend>
				{form.address.map((info) => {
					const { key, name, type } = info;
					return (
						<Label id={key} label={name} key={key}>
							{getInput(key, name, type)}
						</Label>
					);
				})}
			</fieldset>

			<Label id="department" label="Department">
				<Controller
					control={control}
					name={form.department.key}
					render={({ field }) => (
						<Select
							placeholderText={form.department.name}
							options={getOptionsForSelect(form.department.key)}
							menuPlacement="top"
							onChange={(e) => field.onChange(e)}
							selected={field.value}
						/>
					)}
				/>
			</Label>

			<Label id="submit" label="">
				<input id="submit" name="submit" value="Save" type="submit" />
			</Label>
		</form>
	);
};

export default EmployeeForm;
