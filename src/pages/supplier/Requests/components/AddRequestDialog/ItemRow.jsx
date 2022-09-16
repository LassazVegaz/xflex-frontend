import { DeleteOutline as DeleteIcon } from "@mui/icons-material";
import { Box, IconButton, styled, TextField } from "@mui/material";

const MyTextField = styled(TextField)(() => ({
	"& legend": { display: "none" },
	"& fieldset": { top: 0 },
}));

const ItemRow = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				columnGap: 3,
			}}
		>
			<MyTextField size="small" />
			<MyTextField size="small" />
			<IconButton>
				<DeleteIcon color="secondary" />
			</IconButton>
		</Box>
	);
};

export default ItemRow;
