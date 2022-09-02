const models = {
	"personnalInformations": [
		{
			"key": "firstName",
			"name": "First Name",
			"type": "text"
		},
		{
			"key": "lastName",
			"name": "Last Name",
			"type": "text"
		},
		{
			"key": "dateOfBirth",
			"name": "Date of Birth",
			"type": "date"
		},
		{
			"key": "startDate",
			"name": "Start Date",
			"type": "date"
		}
	],
	"address": [
		{
			"key": "street",
			"name": "Street",
			"type": "text"
		},
		{
			"key": "city",
			"name": "City",
			"type": "text"
		},
		{
			"key": "state",
			"name": "State",
			"type": "select"
		},
		{
			"key": "zipCode",
			"name": "Zip Code",
			"type": "number"
		}
	],
	"buisnessInformations": 
		{
			"key": "department",
			"name": "Department",
			"type": "select"
		}
}
export default models
