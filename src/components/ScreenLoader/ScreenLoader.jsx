import { Box, CircularProgress } from "@mui/material";

export const ScreenLoader = () => {
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				zIndex: 1000,
			}}
		>
			<CircularProgress size={70} />
		</Box>
	);
};
