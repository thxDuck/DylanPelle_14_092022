import { createSlice } from "@reduxjs/toolkit";
// import models from "../data/models";
// import { useSelector } from "react";
import { selectEmployee } from "../utils/selectors";
import { checkValue } from "../services/formServices";

const mockedEmployee = {
	list: [],
};

export const setFormError = (error, property) => {
	console.log({ error });
	alert(`${error.msg}`);
};
export const setEmployee = (employee) => {
	return (dispatch, getState) => {
		// TODO : Serialize data ! :D
		dispatch(actions.addEmployee(employee));
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
		addEmployee: {
			prepare: (employee) => ({
				payload: { employee },
			}),
			reducer: (draft, action) => {
				draft.list = draft.list.push(action.payload.employee);
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
