import { Container, Typography } from "@mui/material";
import { FormBox } from "./components/FormBox";

export const CreateSupplierPage = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 4,
			}}
		>
			<Typography variant="h4" textTransform="none">
				Create a Supplier Account
			</Typography>

			<FormBox />
		</Container>
	);
};
