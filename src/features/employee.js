import { createSlice } from "@reduxjs/toolkit";
import models from "../data/models";
import { useSelector } from "react";
import { selectStatus, selectEmployee } from "../utils/selectors";

const alphanumericRegexp = /[^a-z0-9]/gi;
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
const checkValues = (employee, property, value) => {
	const dataModel = models.data[property];
	const response = { success: true, value };
	switch (dataModel.type) {
		case "string":
			response.value = value.replace(alphanumericRegexp, "");
			break;
		case "integer":
			response.value = parseInt(value);
			if (isNaN(value)) {
				response.success = false;
				response.msg = "Only number is accepted !";
				response.errorOn = property;
			}
			break;
		default:
			break;
	}
	return response;
};

export const setValue = (property, value) => {
	return (dispatch, getState) => {
		const status = selectStatus(getState());
		if (status === "pending") return false;
		dispatch(actions.updating());
		const employeeState = selectEmployee(getState());
		const employee = employeeState.data;
		const response = checkValues(employee, property, value);
		if (response.success) dispatch(actions.setValue(property, value));
	};
};

const employeeSlice = createSlice({
	name: "employee",
	initialState: mockedEmployee,
	reducers: {
		updating: {
			reducer: (draft, action) => {
				draft.status = "pending";
				draft.data = mockedEmployee;
				return;
			},
		},
		resolved: {
			reducer: (draft, action) => {
				draft.status = "resolved";
				draft.data = mockedEmployee;
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
