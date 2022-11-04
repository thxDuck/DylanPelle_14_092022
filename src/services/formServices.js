import data from "../data/data.js";
import models from "../data/models.js";
import ERROR from "./errors.js";
const alphanumericRegexp = /[^a-z0-9] /gi;

export const parseEmployees = (employees) => {
	return employees.map((raw_data) => {
		const employee = { ...raw_data };
		employee.startDate = new Date(employee.startDate).toLocaleString().slice(0, 10);
		employee.dateOfBirth = new Date(employee.dateOfBirth).toLocaleString().slice(0, 10);
		employee.department = employee.department.name;
		employee.abbreviation = employee.state.abbreviation;
		employee.state = employee.state.name;
		return employee;
	});
};

const checkSelect = (value, property) => {
	if (!value) return { error: ERROR.FORM.REQUIRED };
	const options = data.options;
	const selectedOption = options[property].find(
		(date) => date.name.toLowerCase() === value.toLowerCase()
	);
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
export const checkValue = (employee, property, value) => {
	const dataModel = models.data[property];
	switch (dataModel.type) {
		case "string":
			value = value.replace(alphanumericRegexp, "");
			return value.length > 2 ? { checkedValue: value } : { error: ERROR.STRING.LENGTH };
		case "enum":
			value = value.value;
			return checkSelect(value, property);
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

export const getFormStructure = () => {
	return models.employeeByCat
};

export const getColumns = () => {
	const columns = models.employee
	columns.forEach((c) => {
		c.selector = (row) => row[c.key];
	});
	return columns;
};

export const getOptionsForSelect = (id) => {
	const raw_options = data.options[id];
	if (!raw_options) return false;
	const options = raw_options.map((item) => ({ value: item.name, label: item.name }));
	return options;
};
