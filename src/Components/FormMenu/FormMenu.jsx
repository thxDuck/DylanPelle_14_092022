import React from "react";
import Modal, { useModal } from "thx-modal";
import { useDispatch } from "react-redux";
import * as employeeActions from "../../redux/employee";
import { createRandomEmployee } from "../../scripts/mock";

import "./FormMenu.scss";
const FormMenu = () => {
	const { openedModals, toggleModal } = useModal();
	const dispatch = useDispatch();

	const getRandomEmployee = () => {
		const employees = createRandomEmployee(100);
		employees.forEach((employee) => {
			dispatch(employeeActions.setEmployee(employee));
		});
		toggleModal("employeeCreated");
	};
	const cleanEmployeeList = () => {
		dispatch(employeeActions.clearEmployees());
		toggleModal("clearSuccess");
	};
	return (
		<>
			<button className="menu-btn" onClick={() => toggleModal("menu")}>
				Menu
			</button>
			<Modal
				id="menu"
				onClose={toggleModal}
				isOpen={openedModals["menu"]}
				closeText={"x"}>
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
				closeText={"x"}>
				<div id="buttonList">Sucess clean employee list !</div>
			</Modal>
			<Modal
				id="employeeCreated"
				onClose={toggleModal}
				isOpen={openedModals["employeeCreated"]}
				modalSize="md"
				closeText={"x"}>
				<div id="buttonList">Sucess create random employees !</div>
			</Modal>
		</>
	);
};

export default FormMenu;
