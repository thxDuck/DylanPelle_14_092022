import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employees: [],
};

export const setEmployee = (employee) => {
	return (dispatch) => {
		dispatch(actions.addEmployee(employee));
	};
};

export const clearEmployees = () => {
	return (dispatch) => {
		dispatch(actions.clearEmployees());
	};
};

const employeeSlice = createSlice({
	name: "employee",
	initialState: initialState,
	reducers: {
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
			reducer: (draft) => {
				draft.employees = [];
				return;
			},
		},
	},
});

const { actions, reducer } = employeeSlice;
export default reducer;
