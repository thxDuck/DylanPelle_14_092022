import React from "react";
import Input from "./Forms/Inputs.jsx";
import SelectInput from "./Forms/Select.jsx";
import Datepicker from "./Forms/Datepicker.jsx";

const options = {
	department: ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"],
	states: [
		{
			name: "Alabama",
			abbreviation: "AL",
		},
		{
			name: "Alaska",
			abbreviation: "AK",
		},
		{
			name: "American Samoa",
			abbreviation: "AS",
		},
		{
			name: "Arizona",
			abbreviation: "AZ",
		},
		{
			name: "Arkansas",
			abbreviation: "AR",
		},
		{
			name: "California",
			abbreviation: "CA",
		},
		{
			name: "Colorado",
			abbreviation: "CO",
		},
		{
			name: "Connecticut",
			abbreviation: "CT",
		},
		{
			name: "Delaware",
			abbreviation: "DE",
		},
		{
			name: "District Of Columbia",
			abbreviation: "DC",
		},
		{
			name: "Federated States Of Micronesia",
			abbreviation: "FM",
		},
		{
			name: "Florida",
			abbreviation: "FL",
		},
		{
			name: "Georgia",
			abbreviation: "GA",
		},
		{
			name: "Guam",
			abbreviation: "GU",
		},
		{
			name: "Hawaii",
			abbreviation: "HI",
		},
		{
			name: "Idaho",
			abbreviation: "ID",
		},
		{
			name: "Illinois",
			abbreviation: "IL",
		},
		{
			name: "Indiana",
			abbreviation: "IN",
		},
		{
			name: "Iowa",
			abbreviation: "IA",
		},
		{
			name: "Kansas",
			abbreviation: "KS",
		},
		{
			name: "Kentucky",
			abbreviation: "KY",
		},
		{
			name: "Louisiana",
			abbreviation: "LA",
		},
		{
			name: "Maine",
			abbreviation: "ME",
		},
		{
			name: "Marshall Islands",
			abbreviation: "MH",
		},
		{
			name: "Maryland",
			abbreviation: "MD",
		},
		{
			name: "Massachusetts",
			abbreviation: "MA",
		},
		{
			name: "Michigan",
			abbreviation: "MI",
		},
		{
			name: "Minnesota",
			abbreviation: "MN",
		},
		{
			name: "Mississippi",
			abbreviation: "MS",
		},
		{
			name: "Missouri",
			abbreviation: "MO",
		},
		{
			name: "Montana",
			abbreviation: "MT",
		},
		{
			name: "Nebraska",
			abbreviation: "NE",
		},
		{
			name: "Nevada",
			abbreviation: "NV",
		},
		{
			name: "New Hampshire",
			abbreviation: "NH",
		},
		{
			name: "New Jersey",
			abbreviation: "NJ",
		},
		{
			name: "New Mexico",
			abbreviation: "NM",
		},
		{
			name: "New York",
			abbreviation: "NY",
		},
		{
			name: "North Carolina",
			abbreviation: "NC",
		},
		{
			name: "North Dakota",
			abbreviation: "ND",
		},
		{
			name: "Northern Mariana Islands",
			abbreviation: "MP",
		},
		{
			name: "Ohio",
			abbreviation: "OH",
		},
		{
			name: "Oklahoma",
			abbreviation: "OK",
		},
		{
			name: "Oregon",
			abbreviation: "OR",
		},
		{
			name: "Palau",
			abbreviation: "PW",
		},
		{
			name: "Pennsylvania",
			abbreviation: "PA",
		},
		{
			name: "Puerto Rico",
			abbreviation: "PR",
		},
		{
			name: "Rhode Island",
			abbreviation: "RI",
		},
		{
			name: "South Carolina",
			abbreviation: "SC",
		},
		{
			name: "South Dakota",
			abbreviation: "SD",
		},
		{
			name: "Tennessee",
			abbreviation: "TN",
		},
		{
			name: "Texas",
			abbreviation: "TX",
		},
		{
			name: "Utah",
			abbreviation: "UT",
		},
		{
			name: "Vermont",
			abbreviation: "VT",
		},
		{
			name: "Virgin Islands",
			abbreviation: "VI",
		},
		{
			name: "Virginia",
			abbreviation: "VA",
		},
		{
			name: "Washington",
			abbreviation: "WA",
		},
		{
			name: "West Virginia",
			abbreviation: "WV",
		},
		{
			name: "Wisconsin",
			abbreviation: "WI",
		},
		{
			name: "Wyoming",
			abbreviation: "WY",
		},
	],
};

const EmployeeForm = () => {
	const formType = {
		informations: {
			firstName: {
				label: "First Name",
				value: "First Name",
			},
			lastName: {
				label: "Last Name",
				value: "Last Name",
			},
			birthDate: {
				label: "Date of Birth",
				value: "Date of Birth",
				type: "date",
			},
			startDate: {
				label: "Start Date",
				value: "Start Date",
				type: "date",
			},
		},
		adress: {
			street: {
				label: "Street",
				value: "Street",
			},
			city: {
				label: "City",
				value: "City",
			},
			state: {
				label: "State",
				value: "State",
				type: "select",
				options: options.states.map((o) => o.name),
			},
			zipCode: {
				label: "Zip Code",
				value: "Zip Code",
				type: "number",
			},
		},
		department: {
			label: "Department",
			value: "Department",
			options: options.department,
			type: "select",
		},
	};
	const informations = Object.keys(formType.informations);
	const adress = Object.keys(formType.adress);

	return (
		<form>
			{informations.map((key, index) => {
				const item = formType.informations[key];
				switch (item.type) {
					case "select":
						return (
							<SelectInput
								label={item.label}
								options={item.options}
								key={key}
								type={item.type}
							/>
						);
					case "date":
						return (
							<Datepicker
								label={item.label}
								options={item.options}
								key={key}
								type={item.type}
							/>
						);
					default:
						return <Input label={item.label} key={key + index} type={item.type} />;
				}
			})}
			<fieldset>
				<legend>Address</legend>
				{adress.map((key, index) => {
					const item = formType.adress[key];
					switch (item.type) {
						case "select":
							return (
								<SelectInput
									label={item.label}
									options={item.options}
									key={key}
									type={item.type}
								/>
							);
						case "date":
							return (
								<Datepicker
									label={item.label}
									options={item.options}
									key={key}
									type={item.type}
								/>
							);
						default:
							return <Input label={item.label} key={key + index} type={item.type} />;
					}
				})}
			</fieldset>

			<SelectInput
				label={formType.department.label}
				options={formType.department.options}
				key={"department"}
				type={formType.department.type}
			/>

			<input type="submit" value="Save" />
		</form>
	);
};

export default EmployeeForm;
