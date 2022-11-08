import React from "react";
import Modal, { useModal } from "../EmployeeForm/Modal";
import "./FormMenu.scss";

const FormMenu = (props) => {
	const { openedModals, toggleModal } = useModal();
	const clear = () => props.clear();
	const random = () => props.random();
	return (
		<>
			<button onClick={() => toggleModal("menu")}>FormMenu</button>
			<Modal id="menu" onClose={toggleModal} isOpen={openedModals["menu"]} modalSize="sm" closeText={"x"} exitOnClick={true}>
				<div id="buttonList">
					<button onClick={() => clear()}>Clear list</button>
					<button onClick={() => random()}>Get 100 random employees</button>
				</div>
			</Modal>
		</>
	);
};

export default FormMenu;
