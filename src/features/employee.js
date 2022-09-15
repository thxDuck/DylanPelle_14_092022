import { createSlice } from "@reduxjs/toolkit";
// import models from "../data/models";
import data from "../data/data";
// import { useSelector } from "react";
// import { selectEmployee } from "../utils/selectors";
import { checkValue } from "../services/formServices";

const initialState = {
	employees: [],
	errors: {},
};

export const setEmployee = (raw_employee) => {
	return (dispatch, getState) => {
		let hasError = false;
		const employee = { ...data.employee };
		for (const property in raw_employee) {
			const raw_value = raw_employee[property];
			const { checkedValue, error } = checkValue(raw_employee, property, raw_value);
			if (!!error) {
				hasError = true;
				dispatch(actions.setError({ ...error, property }));
			} else {
				dispatch(actions.removeError(property));
				employee[property] = checkedValue;
			}
		}
		if (!hasError) dispatch(actions.addEmployee(employee));
	};
};

const employeeSlice = createSlice({
	name: "employee",
	initialState: initialState,
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
		addEmployee: {
			prepare: (employee) => ({
				payload: { employee },
			}),
			reducer: (draft, action) => {
				draft.employees.push(action.payload.employee);
				return;
			},
		},
		setError: {
			prepare: (error) => ({
				payload: { property: error.property, msg: error.msg },
			}),
			reducer: (draft, action) => {
				draft.errors[action.payload.property] = action.payload.msg;
				return;
			},
		},
		removeError: {
			reducer: (draft, action) => {
				draft.errors[action.payload] = false;
				return;
			},
		},
		clearEmployee: {
			reducer: (draft, action) => {
				draft.status = "void";
				draft.data = initialState;
				return;
			},
		},
	},
});

const { actions, reducer } = employeeSlice;
export default reducer;
