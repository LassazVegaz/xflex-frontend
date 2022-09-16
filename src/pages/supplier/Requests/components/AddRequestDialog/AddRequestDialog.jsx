import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { MyButton } from "../../../../../components/MyButton/MyButton";
import MiddleLayer from "./MiddleLayer";

const AddRequestDialog = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle
				sx={{
					textAlign: "center",
				}}
			>
				Send a Request to the Supplier
			</DialogTitle>
			<DialogContent>
				<Box pt={3} />

				<MiddleLayer />
			</DialogContent>
			<DialogActions
				sx={{
					justifyContent: "center",
					py: 2,
				}}
			>
				<MyButton variant="contained">Send</MyButton>
			</DialogActions>
		</Dialog>
	);
};

export default AddRequestDialog;
