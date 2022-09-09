import { createSlice } from "@reduxjs/toolkit";
// import models from "../data/models";
// import { useSelector } from "react";
import { selectEmployee } from "../utils/selectors";
import { checkValue } from "../services/formServices";

const emptyEmployee = {
	firstName: "",
	lastName: "",
	dateOfBirth: "",
	startDate: "",
	street: "",
	city: "",
	state: "",
	zipCode: "",
	department: "",
};
const mockedEmployee = {
	status: "void",
	error: false,
	data: { ...emptyEmployee },
};

export const setFormError = (error, property) => {
	console.log({ error });
	alert(`${error.msg}`);
};
export const setValue = (property, value) => {
	return (dispatch, getState) => {
		const EmployeeStoreData = selectEmployee(getState());
		const employee = { ...EmployeeStoreData };
		const { error, checkedValue } = checkValue(employee, property, value);
		if (!!error) setFormError(error, property);
		else {
			dispatch(actions.setValue(property, checkedValue));
		}
	};
};

const employeeSlice = createSlice({
	name: "employee",
	initialState: mockedEmployee,
	reducers: {
		updating: {
			reducer: (draft, action) => {
				draft.status = "pending";
				return;
			},
		},
		resolved: {
			reducer: (draft, action) => {
				draft.status = "resolved";
				return;
			},
		},
		setValue: {
			prepare: (property, value) => ({
				payload: { property, value },
			}),
			reducer: (draft, action) => {
				draft.status = "resolved";
				draft.data[action.payload.property] = action.payload.value;
				return;
			},
		},
		clearEmployee: {
			reducer: (draft, action) => {
				draft.status = "void";
				draft.data = mockedEmployee;
				return;
			},
		},
	},
});

const { actions, reducer } = employeeSlice;
export default reducer;
