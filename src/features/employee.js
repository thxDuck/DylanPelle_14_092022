import { createSlice } from "@reduxjs/toolkit";
import models from "../data/models";
import { useSelector } from "react";
import { selectStatus, selectEmployee } from "../utils/selectors";
import {checkValues as verifyValue} from "../services/formServices";

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


export const setValue = (property, value) => {
	return (dispatch, getState) => {
		const employeeState = selectEmployee(getState());
		console.log({ value });
		const employee = employeeState.data;
		const response = verifyValue(employee, property, value);
		if (response.success)  {
			dispatch(actions.setValue(property, response.value));
			return value;
		} else {
			return false
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
