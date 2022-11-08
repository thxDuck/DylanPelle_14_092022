/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal, { useModal } from "thx-modal";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./EmployeeForm.scss";
import Label from "../Forms/Label.jsx";
import FormMenu from "../FormMenu/FormMenu.jsx";
import * as employeeActions from "../../features/employee";
import { getFormStructure, getOptionsForSelect } from "../../services/formServices";
import { createRandmonEmployees } from "../../utils/mock";
import { ErrorContext } from "../../utils/context";

const EmployeeForm = () => {
	const { setError } = useContext(ErrorContext);
	const dispatch = useDispatch();
	const { openedModals, toggleModal } = useModal();
	const formStructure = getFormStructure();
	let modalText = "";
	const getRandomEmployees = () => {
		const employees = createRandmonEmployees(100);
		employees.forEach((employee) => {
			dispatch(employeeActions.setEmployee(employee));
		});
		modalText = "Random employees created !";
		toggleModal("modal-success");
	};
	const clearEmployees = () => {
		console.log("Clear");
		dispatch(employeeActions.clearEmployees());
		modalText = "Employees list cleaned !";
		toggleModal("modal-success");
	};

	const defaultValues = {
		firstName: "Coucou",
		lastName: "qzdqzd",
		dateOfBirth: new Date().setFullYear(new Date().getFullYear() - 18),
		startDate: new Date(),
		department: "",
		street: "qzdqzd",
		city: "qzdqzd",
		state: "",
		zipCode: 49520,
	};

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState,
		formState: { isSubmitSuccessful },
	} = useForm({ defaultValues });

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset(defaultValues);
		}
	}, [formState, isSubmitSuccessful, reset]);
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
		console.log({ data });
		setError(false);
		const { success, errors } = dispatch(employeeActions.setEmployee(data));
		errors.forEach((e) => setError(e.property, e.msg));
		modalText = "Employee created !";
		if (success) toggleModal("modal-success");
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-grp personnalInfos">
					{formStructure["Personnal Informations"].map((info, index) => {
						return (
							<Label id={info.key} label={info.name} key={index}>
								{getInput(info.key, info.type, info.name, info.value)}
							</Label>
						);
					})}
				</div>
				<div className="form-grp address">
					{formStructure["Address"].map((info, index) => {
						return (
							<Label id={info.key} label={info.name} key={index}>
								{getInput(info.key, info.type, info.name, info.value)}
							</Label>
						);
					})}
				</div>
				<button className="btn btn-submit" type="submit">
					Save
				</button>
				<FormMenu random={getRandomEmployees} clear={clearEmployees} />
			</form>

			<Modal
				id={"modal-success"}
				isOpen={openedModals["modal-success"]}
				onClose={() => toggleModal("modal-success")}
				title="Success"
				content={modalText}
				index={0}
				contentStyle={{ padding: "2rem 0 1rem 0" }}
			/>
		</>
	);
};

export default EmployeeForm;
