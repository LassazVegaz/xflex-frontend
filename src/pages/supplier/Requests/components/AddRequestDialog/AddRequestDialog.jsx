import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { useContext } from "react";
import { MyButton } from "../../../../../components/MyButton/MyButton";
import { DialogContext, DialogContextProvider } from "./DialogContext";
import MiddleLayer from "./MiddleLayer";

const ActualDialog = ({ open, onClose }) => {
	const { form } = useContext(DialogContext);

	return (
		<Dialog open={open} onClose={onClose}>
			<Box component="form" onSubmit={form.handleSubmit}>
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
					<MyButton variant="contained" type="submit">
						Send
					</MyButton>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

const AddRequestDialog = ({ open, onClose }) => {
	return (
		<DialogContextProvider>
			<ActualDialog open={open} onClose={onClose} />
		</DialogContextProvider>
	);
};

export default AddRequestDialog;
