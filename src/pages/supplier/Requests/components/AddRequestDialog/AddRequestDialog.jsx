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

	const clearAndClose = () => {
		form.resetForm();
		onClose();
	};

	return (
		<Dialog
			open={open}
			onClose={clearAndClose}
			sx={{
				"& .MuiDialog-paper": {
					borderRadius: 5,
				},
			}}
		>
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
						justifyContent: "space-between",
						py: 2,
						px: 3,
					}}
				>
					<MyButton
						variant="outlined"
						onClick={clearAndClose}
						color="secondary"
					>
						Cancel
					</MyButton>

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
