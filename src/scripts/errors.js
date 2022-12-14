const ERROR = {
	STRING: {
		LENGTH: {
			code: "01xc001",
			msg: "This field should contain between 2 and 100 characters",
		}
	},
	INTEGER: {
		IS_NAN: {
			code: "02xc001",
			msg: "Select a valid number !",
		},
		NEGATIVE: {
			code: "02xc002",
			msg: "Select a positive number !",
		},
		NEED_5: {
			code: "02xc003",
			msg: "Select a valid zip code (5 digits) !",
		},
	},
	DATES: {
		NOT_VALID: {
			code: "05xc001",
			msg: "Select a valid date !",
		},
		OVER_TODAY: {
			code: "05xc002",
			msg: "Birth date cannot be in the future !",
		},
		COHERENCE: {
			code: "05xc100",
			msg: "Birth date can't be over start date !",
		},
	},
	FORM: {
		NO_TYPE: {
			code: "99xc100",
			msg: 'Unable to find type of value ! Please contact an administrator (code: "99xc100").',
		},
		REQUIRED: {
			code: "99xc000",
			msg: 'This values is required',
		},
	},
};
export default ERROR;
