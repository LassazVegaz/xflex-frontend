import { Box, Typography } from "@mui/material";
import { useState } from "react";
import RoundPlusButon from "../../../../components/RoundPlusIcon/RoundPlusButon";
import AddRequestDialog from "./AddRequestDialog";

const MiddlePart = () => {
	const [openDialog, setOpenDialog] = useState(true);

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

			<AddRequestDialog open={openDialog} />
		</>
	);
};

export default MiddlePart;
