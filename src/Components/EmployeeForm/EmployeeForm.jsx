/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal, { useModal } from "thx-modal";

import "./EmployeeForm.scss";
import Form from "./Form.jsx";
import { getFormStructure } from "../../services/formServices";
import FormMenu from "../FormMenu/FormMenu.jsx";

const defaultValues = {
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
		<>
			<Form employee={defaultValues} structure={formStructure} />
			<FormMenu />

			{/* <form onSubmit={handleSubmit(onSubmit)}>
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
			</form> */}

			{/* <Modal
				id={"modal-success"}
				isOpen={openedModals["modal-success"]}
				onClose={() => toggleModal("modal-success")}
				title="Success"
				content={modalText}
				index={0}
				contentStyle={{ padding: "2rem 0 1rem 0" }}
			/> */}
		</>
	);
};

export default EmployeeForm;
