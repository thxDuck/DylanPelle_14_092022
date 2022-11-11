import React, { useState } from "react";
import Modal, { useModal } from "thx-modal";
import { useDispatch } from "react-redux";
import * as employeeActions from "../../redux/employee";
import { createRandomEmployee } from "../../scripts/mock";

import "./ActionMenu.scss";
const ActionMenu = () => {
	const { openedModals, toggleModal } = useModal();
	const dispatch = useDispatch();
	const [modalContent, setModalContent] = useState("");
	const getRandomEmployee = () => {
		const employees = createRandomEmployee(100);
		employees.forEach((employee) => {
			dispatch(employeeActions.setEmployee(employee));
		});
		setModalContent("Employees created !");
		toggleModal("success-modal");
	};
	const cleanEmployeeList = () => {
		dispatch(employeeActions.clearEmployees());
		setModalContent("Employees cleared !");
		toggleModal("success-modal");
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
				title={"Select action !"}
				backgroundStyle={false}
				index={"1"}
				closeText={"x"}>
				<div id="modal-content">
					<button onClick={() => cleanEmployeeList()}>Clear list</button>
					<button onClick={() => getRandomEmployee()}>Get 100 random employees</button>
				</div>
			</Modal>

			<Modal
				id="success-modal"
				onClose={toggleModal}
				isOpen={openedModals["success-modal"]}
				backgroundStyle={false}
				modalSize="sm"
				index={"2"}
				exitOnClick={true}
				title="Success"
				closeText={"x"}>
				<div id="modal-content">{modalContent}</div>
			</Modal>
		</>
	);
};

export default ActionMenu;
