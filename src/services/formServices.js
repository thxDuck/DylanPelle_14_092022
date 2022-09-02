import data from "../data/data.js";
import models from "../data/models.js";


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
