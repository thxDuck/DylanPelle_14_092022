import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employees: [],
	errors: {},
};

export const setEmployee = (employee) => {
	return (dispatch, getState) => {
		dispatch(actions.addEmployee(employee));
	};
};

export const clearEmployees = () => {
	return (dispatch, getState) => {
		dispatch(actions.clearEmployees());
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
		clearEmployees: {
			reducer: (draft, action) => {
				draft.employees = [];
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
