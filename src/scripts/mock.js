import { options, mockInformations } from "./data.js";
const department = options.department;
const names = mockInformations.names;
const cities = mockInformations.cities;
const states = options.state;

const getRandomDate = () => {
	const rdmDate = Math.floor(Math.random() * new Date().getTime());
	return new Date(rdmDate).getTime();
};
const getRandomValueInArray = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};
export const createRandomEmployee = (nb) => {
	const employees = [];
	for (let i = 0; i < nb; i++) {
		const employee = {
			firstName: getRandomValueInArray(names),
			lastName: getRandomValueInArray(names),
			startDate: getRandomDate(),
			department: { ...getRandomValueInArray(department) },
			street: getRandomValueInArray(cities) + "-" + getRandomValueInArray(cities),
			city: getRandomValueInArray(cities),
			state: { ...getRandomValueInArray(states) },
			zipCode: Math.floor(Math.random() * 99999),
		};
		do {
			employee.dateOfBirth = getRandomDate();
		} while (
			employee.dateOfBirth > new Date().getTime() ||
			employee.dateOfBirth > employee.startDate
		);
		employees.push(employee);
	}
	return employees;
};
