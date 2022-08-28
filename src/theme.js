import { createTheme } from "@mui/material";

const themeOptions = {
	palette: {
		type: "light",
		primary: {
			main: "#393939",
		},
		secondary: {
			main: "#f50057",
		},
	},
};

const theme = createTheme(themeOptions);

export default theme;
