import data from "../data/data.js";
import models from "../data/models.js";
import ERROR from "./errors.js";
const alphanumericRegexp = /[^a-z0-9]/gi;

export const checkDateCoherence = (date, property, employee) => {
	date = new Date(date).getTime();
	if (isNaN(date)) return { error: ERROR.DATES.NOT_VALID };
	if (date > new Date().getTime()) return { error: ERROR.DATES.OVER_TODAY };

	employee[property] = date;
	const birth = employee.dateOfBirth;
	const start = employee.startDate;
	if (!birth || !start) return { checkedValue: date };
	if (new Date(birth).getTime() >= new Date(start).getTime())
		return { error: ERROR.DATES.COHERENCE };
	return { checkedValue: date };
};
export const checkValue = (employee, property, value) => {
	const dataModel = models.data[property];
	switch (dataModel.type) {
		case "string":
			return { checkedValue: value.replace(alphanumericRegexp, "") };
		case "enum":
			return checkSelect(value, property);
		case "integer":
			value = parseInt(value);
			if (isNaN(value)) return { error: ERROR.INTEGER.IS_NAN };
			else if (value <= 0) return { error: ERROR.INTEGER.NEGATIVE };
			return { checkedValue: value };
		case "date":
			return checkDateCoherence(value, property, employee);
		default:
			return { error: ERROR.FORM.NO_TYPE };
	}
};
const checkSelect = (value, property) => {
	// TODO : Check select in values, and return valid info (Model object)
	return { checkedValue: value };
};

export const getFormInformations = () => {
	return {
		informations: models.personnalInformations,
		address: models.address,
		department: models.buisnessInformations,
	};
};

export const getColumns = () => {
	const columns = [
		...models.personnalInformations,
		...models.address,
		models.buisnessInformations,
	];
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
