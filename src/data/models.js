const models = {
	"personnalInformations": [
		{
			"key": "firstName",
			"label": "First Name",
			"type": "text"
		},
		{
			"key": "lastName",
			"label": "Last Name",
			"type": "text"
		},
		{
			"key": "birthDate",
			"label": "Date of Birth",
			"type": "date"
		},
		{
			"key": "startDate",
			"label": "Start Date",
			"type": "date"
		}
	],
	"address": [
		{
			"key": "street",
			"label": "Street",
			"type": "text"
		},
		{
			"key": "city",
			"label": "City",
			"type": "text"
		},
		{
			"key": "state",
			"label": "State",
			"type": "select"
		},
		{
			"key": "zipCode",
			"label": "Zip Code",
			"type": "number"
		}
	],
	"buisnessInformations": 
		{
			"key": "department",
			"label": "Department",
			"type": "select"
		}
}
export default models
