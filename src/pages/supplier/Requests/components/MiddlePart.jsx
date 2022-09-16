import { Add as AddIcon } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const MiddlePart = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				columnGap: 3,
			}}
		>
			<Typography variant="h5" fontWeight={700}>
				Pending Requests
			</Typography>

			<IconButton
				sx={{
					color: "primary.main",
					fontWeight: "bold",
					border: "1px solid",
					width: 42,
					height: 42,
				}}
			>
				<AddIcon fontSize="large" />
			</IconButton>
		</Box>
	);
};

export default MiddlePart;
