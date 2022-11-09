export const columnTable = [
	{
		key: "firstName",
		name: "First Name",
		sortable: true,
	},
	{
		key: "lastName",
		name: "Last Name",
		sortable: true,
	},
	{
		key: "startDate",
		name: "Start Date",
		sortable: true,
	},
	{
		key: "department",
		name: "Department",
		sortable: true,
		width: "11rem",
	},
	{
		key: "dateOfBirth",
		name: "Date of Birth",
		sortable: true,
	},
	{
		key: "street",
		name: "Street",
		sortable: true,
		width: "18rem",
	},
	{
		key: "city",
		name: "City",
		sortable: true,
	},
	{
		key: "state",
		name: "State",
		sortable: true,
	},
	{
		key: "zipCode",
		name: "Zip Code",
		sortable: true,
	},
];
export const employeeByCat = {
	"Personnal Informations": [
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
		{
			key: "department",
			name: "Department",
			type: "select",
			value: "",
		},
	],
	Address: [
		{
			key: "street",
			name: "Street",
			type: "string",
			value: "",
		},
		{
			key: "city",
			name: "City",
			type: "string",
			value: "",
		},
		{
			key: "state",
			name: "State",
			type: "select",
			value: "",
		},
		{
			key: "zipCode",
			name: "Zip Code",
			type: "number",
			value: "",
		},
	],
};
export const employeePropertiesType = {
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
};
