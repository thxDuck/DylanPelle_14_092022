const models = {
	employee: [
		{
			key: "firstName",
			name: "First Name",
			type: "string",
			category: "Personnal Informations",
		},
		{
			key: "lastName",
			name: "Last Name",
			type: "string",
			category: "Personnal Informations",
		},
		{
			key: "dateOfBirth",
			name: "Date of Birth",
			type: "date",
			category: "Personnal Informations",
		},
		{
			key: "startDate",
			name: "Start Date",
			type: "date",
			category: "Personnal Informations",
		},
		{
			key: "department",
			name: "Department",
			type: "select",
			category: "Personnal Informations",
		},
		{
			key: "street",
			name: "Street",
			type: "string",
			category: "Address",
		},
		{
			key: "city",
			name: "City",
			type: "string",
			category: "Address",
		},
		{
			key: "state",
			name: "State",
			type: "select",
			category: "Address",
		},
		{
			key: "zipCode",
			name: "Zip Code",
			type: "number",
			category: "Address",
		},
	],
	personnalInformations: [
		{
			key: "firstName",
			name: "First Name",
			type: "string",
		},
		{
			key: "lastName",
			name: "Last Name",
			type: "string",
		},
		{
			key: "dateOfBirth",
			name: "Date of Birth",
			type: "date",
		},
		{
			key: "startDate",
			name: "Start Date",
			type: "date",
		},
	],
	address: [
		{
			key: "street",
			name: "Street",
			type: "string",
		},
		{
			key: "city",
			name: "City",
			type: "string",
		},
		{
			key: "state",
			name: "State",
			type: "select",
		},
		{
			key: "zipCode",
			name: "Zip Code",
			type: "number",
		},
	],
	buisnessInformations: {
		key: "department",
		name: "Department",
		type: "select",
	},
	data: {
		firstName: {
			type: "string",
		},
		lastName: {
			type: "string",
		},
		dateOfBirth: {
			type: "date",
		},
		startDate: {
			type: "date",
		},
		street: {
			type: "string",
		},
		city: {
			type: "string",
		},
		state: {
			type: "enum",
		},
		zipCode: {
			type: "integer",
		},
		department: {
			type: "enum",
		},
	},
};
export default models;
