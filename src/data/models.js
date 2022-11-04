const models = {
	employee: [
		{
			key: "firstName",
			name: "First Name",
			type: "string",
			sortable: true,
		},
		{
			key: "lastName",
			name: "Last Name",
			type: "string",
			sortable: true,
		},
		{
			key: "dateOfBirth",
			name: "Date of Birth",
			type: "date",
			sortable: true,
		},
		{
			key: "startDate",
			name: "Start Date",
			type: "date",
			sortable: true,
		},
		{
			key: "department",
			name: "Department",
			type: "select",
			sortable: true,
		},
		{
			key: "street",
			name: "Street",
			type: "string",
			sortable: true,
		},
		{
			key: "city",
			name: "City",
			type: "string",
			sortable: true,
		},
		{
			key: "state",
			name: "State",
			type: "select",
			sortable: true,
		},
		{
			key: "zipCode",
			name: "Zip Code",
			type: "number",
			sortable: true,
		},
	],
	employeeByCat: {
		"Personnal Informations": [
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
			},
			{
				key: "startDate",
				name: "Start Date",
				type: "date",
			},
			{
				key: "department",
				name: "Department",
				type: "select",
			},
		],
		Address: [
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
	},
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
