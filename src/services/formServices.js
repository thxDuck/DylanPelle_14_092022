import data from "../data/data.js";
import models from "../data/models.js";

export const handleInputChange = (e) => {
	console.log({ handleInputChange: e.target.value });
};
export const handleSelectChange = (e) => {
	console.log({ handleSelectChange: e.value });
};
export const handleDateChange = (e) => {
	console.log({ newDate: e });
};

export const getFormInformations = () => {
	return {
		informations: models.personnalInformations,
		address: models.address,
		department: models.buisnessInformations,
	};
};
// Todo : ajouter l'extention de l'Etat, voir le css, et le tri par colonne

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
