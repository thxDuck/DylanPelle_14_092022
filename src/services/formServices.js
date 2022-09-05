import data from "../data/data.js";
import models from "../data/models.js";
const alphanumericRegexp = /[^a-z0-9]/gi;

export const getValidDate = (date, property) => {
	date = new Date(date)
	const result = { success: true, date: date }
	if (isNaN(date.getTime())) {
		result.error = true;
		result.msg = "Date are not valid !"
		return false;
	}

	const dateModel = models.personnalInformations.filter(model => model.type === "date");
	const dateToUpdate = dateModel.find(d => d.key === property)
	const dateToCompare = dateModel.find(d => d.key !== property)
	console.log({ dateToCompare, dateToUpdate });
	dateToUpdate.value = date;
	// TODO : CHeck other value !
	console.log({ dateModel });
	return date

}
export const checkValues = (employee, property, value) => {
	const dataModel = models.data[property];
	const response = { success: true, value };
	switch (dataModel.type) {
		case "string":
			response.value = value.replace(alphanumericRegexp, "");
			break;
		case "integer":
			response.value = parseInt(value);
			if (isNaN(response.value)) {
				response.success = false;
				response.msg = "Only number is accepted !";
				response.errorOn = property;
			} else if (response.value <= 0) {
				response.success = false;
				response.msg = "Only positive number is accepted !";
				response.errorOn = property;
			}
			break;
			case "date":
				const date = new Date(value);
				const dateChecked = getValidDate(date, property);
				response.value = dateChecked.date;
			if (!dateChecked.success) {
				response.success = false;
				response.msg = dateChecked.msg
				response.errorOn = property;
			}

			break;
		default:
			break;
	}
	return response;
};



export const handleInputChange = (id, e) => {
	console.log({ id, handleInputChange: e.target.value });
	return e.target.value;
};
export const handleSelectChange = (id, value) => {
	console.log({ id, value });
};
export const handleDateChange = (id, e) => {
	console.log({ id, newDate: e });
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
