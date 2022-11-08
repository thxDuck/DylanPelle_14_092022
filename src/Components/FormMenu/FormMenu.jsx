import React from "react";
import Modal, { useModal } from "thx-modal";
import { useDispatch } from "react-redux";
import * as employeeActions from "../../features/employee";
import { createRandmonEmployees } from "../../utils/mock";

import "./FormMenu.scss";

const FormMenu = (props) => {
	// const { openedModals, toggleModal } = props;
	const { openedModals, toggleModal } = useModal();
	const dispatch = useDispatch();

	const getRandomEmployee = () => {
		const employees = createRandmonEmployees(100);
		employees.forEach((employee) => {
			dispatch(employeeActions.setEmployee(employee));
		});
		alert("Employees created !");
	};
	const cleanEmployeeList = () => {
		dispatch(employeeActions.clearEmployees());
		toggleModal("clearSuccess");
	};
	return (
		<>
			<button onClick={() => toggleModal("menu")}>FormMenu</button>
			<Modal
				id="menu"
				onClose={toggleModal}
				isOpen={openedModals["menu"]}
				modalSize="sm"
				closeText={"x"}
				exitOnClick={true}>
				<div id="buttonList">
					<button onClick={() => cleanEmployeeList()}>Clear list</button>
					<button onClick={() => getRandomEmployee()}>Get 100 random employees</button>
				</div>
			</Modal>
			<Modal
				id="clearSuccess"
				onClose={toggleModal}
				isOpen={openedModals["clearSuccess"]}
				modalSize="md"
				closeText={"x"}
				exitOnClick={true}>
				<div id="buttonList">Sucess clean employee list !</div>
			</Modal>
			<Modal
				id="employeeCreated"
				onClose={toggleModal}
				isOpen={openedModals["employeeCreated"]}
				modalSize="md"
				closeText={"x"}
				exitOnClick={true}>
				<div id="buttonList">Sucess create random employees !</div>
			</Modal>
		</>
	);
};

export default FormMenu;
