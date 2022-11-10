import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal, { useModal } from "thx-modal";
import { useDispatch } from "react-redux";
import * as employeeActions from "../../redux/employee";

import { checkEmployee } from "../../scripts/formServices";
import Input from "../FormComponents/Input";
import Label from "../FormComponents/Label";
import "./Form.scss";

const Form = (props) => {
	const { employee, structure } = props;
	const dispatch = useDispatch();
	const { openedModals, toggleModal } = useModal();
	const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
	const [errors, setError] = useState({
		firstName: null,
		lastName: null,
		dateOfBirth: null,
		startDate: null,
		street: null,
		city: null,
		state: null,
		zipCode: null,
		department: null,
	});
	const { register, handleSubmit, control, reset } = useForm({ defaultValues: employee });

	useEffect(() => {
		if (isSubmitSuccess) {
			setIsSubmitSuccess(false);
			reset(employee);
		}
	}, [employee, isSubmitSuccess, reset]);

	const onSubmit = (data) => {
		const { success, errors: newErrors, employee } = checkEmployee(data);
		if (success) {
            dispatch(employeeActions.setEmployee(employee));
            setIsSubmitSuccess(true)
			toggleModal("create-success");
			reset({ ...employee });
		}
		setError(newErrors);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-grp personnalInfos">
					{structure["Personnal Informations"].map((info) => {
						return (
							<Label
								id={info.key}
								label={info.name}
								key={info.key}
								error={errors[info.key]}>
								<Input
									formKey={info.key}
									type={info.type}
									name={info.name}
									value={info.value}
									register={register}
									control={control}
								/>
							</Label>
						);
					})}
				</div>
				<div className="form-grp address">
					{structure["Address"].map((info) => {
						return (
							<Label
								id={info.key}
								label={info.name}
								key={info.key}
								error={errors[info.key]}>
								<Input
									formKey={info.key}
									type={info.type}
									name={info.name}
									value={info.value}
									register={register}
									control={control}
								/>
							</Label>
						);
					})}
				</div>
				<button className="btn btn-submit" type="submit">
					Save
				</button>
			</form>

			<Modal
				id={"create-success"}
				isOpen={openedModals["create-success"]}
				onClose={() => toggleModal("create-success")}
				title="Success"
				content={"Employee created !"}
				index={0}
				contentStyle={{ padding: "2rem 0 1rem 0" }}
			/>
		</>
	);
};

export default Form;
