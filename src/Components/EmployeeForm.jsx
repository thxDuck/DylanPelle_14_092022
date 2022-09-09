import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Label from "./Forms/Label.jsx";
import data from "../data/data";
import { getOptionsForSelect } from "../services/formServices";
const EmployeeForm = () => {
	const alphanumericRegexp = /[^a-z0-9]/gi;

	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			...data.employee,
		},
	});
	const registerOptions = (type) => {
		switch (type) {
			case "text":
				return {
					validate: (value) => value.replace(alphanumericRegexp, ""),
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

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Label id="firstName" label="First Name">
				<input
					id="firstName"
					name="firstName"
					type="text"
					{...register("firstName", registerOptions("text"))}
				/>
			</Label>

			<Label id="lastName" label="Last Name">
				<input
					id="lastName"
					name="lastName"
					type="text"
					{...register("lastName", registerOptions("text"))}
				/>
			</Label>

			<Label id="dateOfBirth" label="Date of Bitrh">
				<Controller
					control={control}
					name="dateOfBirth"
					render={({ field }) => (
						<DatePicker
							className="input"
							placeholderText="01/01/2000"
							onChange={(e) => field.onChange(e)}
							selected={field.value}
						/>
					)}
				/>
			</Label>

			<Label id="startDate" label="Start date">
				<Controller
					control={control}
					name="startDate"
					render={({ field }) => (
						<DatePicker
							className="input"
							placeholderText="01/01/2000"
							onChange={(e) => field.onChange(e)}
							selected={field.value}
						/>
					)}
				/>
			</Label>

			<fieldset>
				<legend>Address</legend>

				<Label id="street" label="Street">
					<input
						id="street"
						name="street"
						type="text"
						{...register("street", registerOptions("text"))}
					/>
				</Label>

				<Label id="state" label="City">
					<input
						id="city"
						name="city"
						type="text"
						{...register("city", registerOptions("text"))}
					/>
				</Label>

				<Label id="state" label="State">
					<Controller
						control={control}
						name="state"
						render={({ field }) => (
							<Select
								className="input"
								placeholderText="State"
								options={getOptionsForSelect("state")}
								menuPlacement="top"
								onChange={(e) => field.onChange(e)}
								selected={field.value}
							/>
						)}
					/>
				</Label>

				<Label id="zipCode" label="Zip code">
					<input
						id="zipCode"
						name="zipCode"
						type="number"
						{...register("zipCode", registerOptions("number"))}
					/>
				</Label>
			</fieldset>

			<Label id="department" label="Department">
				<Controller
					control={control}
					name="department"
					render={({ field }) => (
						<Select
							placeholderText="department"
							options={getOptionsForSelect("department")}
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
