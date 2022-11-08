export const selectStyle = {
	control: (styles) => ({
		...styles,
		backgroundColor: "white",
		borderColor: "#005249",
		boxShadow: "unset",
		":active": {
			borderColor: "#93ad18",
			boxShadow: "0 0 0 1px #93ad18",
		},
		":hover": {
			borderColor: "#93ad18",
			boxShadow: "0 0 0 1px #93ad18",
		},
		":focus": {
			borderColor: "#93ad18",
			boxShadow: "0 0 0 1px #93ad18",
		},
	}),
	option: (styles, { isSelected }) => {
		return {
			...styles,
			backgroundColor: isSelected ? "#93ad18" : undefined,
			":active": {
				backgroundColor: "#93ad18",
			},
			":hover": {
				color: "black",
				backgroundColor: "#f0f4cd",
			},
		};
	},
	input: (styles) => ({ ...styles, color: "#005249" }),
};
