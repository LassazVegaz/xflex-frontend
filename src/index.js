import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const root = createRoot(document.getElementById("root"));

root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
