import { Box, Typography } from "@mui/material";
import { useState } from "react";
import RoundPlusButon from "../../../../components/RoundPlusIcon/RoundPlusButon";
import AddRequestDialog from "./AddRequestDialog/AddRequestDialog";

const MiddlePart = ({ onNewOneCreated }) => {
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
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

				<RoundPlusButon
					sideLength={42}
					onClick={() => setOpenDialog(true)}
					fontSize="large"
				/>
			</Box>

			<AddRequestDialog
				open={openDialog}
				onClose={(newOneCreated) => {
					newOneCreated && onNewOneCreated();
					setOpenDialog(false);
				}}
			/>
		</>
	);
};

export default MiddlePart;
