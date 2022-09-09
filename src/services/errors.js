const ERROR = {
	STRING: {},
	INTEGER: {
		IS_NAN: {
			code: "02xc001",
			msg: "Please select a valid number !",
		},
		NEGATIVE: {
			code: "02xc002",
			msg: "Please select a positive number !",
		},
	},
	DATES: {
		NOT_VALID: {
			code: "05xc001",
			msg: "Please select a valid date !",
		},
		OVER_TODAY: {
			code: "05xc002",
			msg: "Date cannot be in the future !",
		},
		COHERENCE: {
			code: "05xc100",
			msg: "Birth date can't be overstart date !",
		},
	},
	FORM: {
		NO_TYPE: {
			code: "99xc100",
			msg: 'Unable to find type of value ! Please contact an administrator \'(code: "99xc100").',
		},
	},
};
export default ERROR;
