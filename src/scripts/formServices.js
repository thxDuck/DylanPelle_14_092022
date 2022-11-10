import { columnTable, employeeByCat, employeePropertiesType, options } from "./data.js";
import ERROR from "./errors.js";
const alphanumericRegexp = /[^a-z0-9] /gi;

/**
 * Use for get form structure, get each property, with name, key and type of input.
 * Properties sorted in categories !
 * @returns Form structure, contains form elements in category
 */
export const getFormStructure = () => {
	return employeeByCat;
};

/**
 *
 * @param {{}} raw_employee - Check if properties of employee are valids
 * @returns { success, errors, employee } - errors is an array of error detected, employee is valid and parsed employee, ready to register
 */
export const checkEmployee = (raw_employee) => {
	const employee = {};
	let success = true;
	const errors = {};

	for (const property in raw_employee) {
		const raw_value = raw_employee[property];
		const { checkedValue, error } = checkEmployeeValue(raw_employee, property, raw_value);
		if (!!error) {
			success = false;
			errors[property] = error.msg;
		} else {
			employee[property] = checkedValue;
		}
	}
	return { success, errors, employee };
};

export const checkEmployeeValue = (employee, property, value) => {
	const dataModel = employeePropertiesType[property];
	switch (dataModel.type) {
		case "string":
			value = value.replace(alphanumericRegexp, "");
			return value.length > 2 ? { checkedValue: value } : { error: ERROR.STRING.LENGTH };
		case "enum":
			value = value.value;
			return checkSelectValue(value, property);
		case "integer":
			value = parseInt(value);
			if (isNaN(value)) return { error: ERROR.INTEGER.IS_NAN };
			if (value.toString().length !== 5) return { error: ERROR.INTEGER.NEED_5 };
			else if (value <= 0) return { error: ERROR.INTEGER.NEGATIVE };
			return { checkedValue: value };
		case "date":
			return checkDateCoherence(value, property, employee);
		default:
			return { error: ERROR.FORM.NO_TYPE };
	}
};
const checkSelectValue = (value, property) => {
	if (!value) return { error: ERROR.FORM.REQUIRED };
	const opts = [...options[property]];
	const selectedOption = opts.find((date) => date.name.toLowerCase() === value.toLowerCase());
	return !!selectedOption ? { checkedValue: selectedOption } : { error: ERROR.FORM.REQUIRED };
};
export const checkDateCoherence = (date, property, employee) => {
	date = new Date(date).getTime();
	if (isNaN(date)) return { error: ERROR.DATES.NOT_VALID };

	employee[property] = date;
	const birth = employee.dateOfBirth;
	const start = employee.startDate;
	if (!birth || !start) return { checkedValue: date };
	if (birth > new Date().getTime()) return { error: ERROR.DATES.OVER_TODAY };
	if (new Date(birth).getTime() >= new Date(start).getTime())
		return { error: ERROR.DATES.COHERENCE };
	return { checkedValue: date };
};

/**
 * Get all columns for data-table, with selectable rows and properties.
 * @returns array of object contains columns with properties
 */
export const getColumnsForDataTable = () => {
	const columns = columnTable;
	columns.forEach((c) => {
		c.selector = (row) => row[c.key];
	});
	return columns;
};

/**
 *
 * @param {id} id - id of property you want get options for Select input
 * @returns Array of options object, to display in <Select> component
 */
export const getOptionsForSelect = (id) => {
	const opts = [...options[id]];
	if (!opts) return false;
	const optionsParsed = opts.map((item) => ({ value: item.name, label: item.name }));
	return optionsParsed;
};
/**
 *
 * @param {{}} employees - Raw Employee object
 * @returns Employee object at valid format for datatable
 */
export const parseEmployeesForDataTable = (employees) => {
	return employees.map((raw_data) => {
		const employee = { ...raw_data };
		employee.startDate = new Date(employee.startDate).toLocaleString().slice(0, 10);
		employee.dateOfBirth = new Date(employee.dateOfBirth).toLocaleString().slice(0, 10);
		employee.department = employee.department.name;
		employee.state = employee.state.abbreviation;
		return employee;
	});
};
