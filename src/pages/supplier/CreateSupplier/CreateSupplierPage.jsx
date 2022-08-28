import { Typography } from "@mui/material";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { FormBox } from "./components/FormBox";

export const CreateSupplierPage = () => {
	return (
		<PageContainer maxWidth="lg">
			<Typography variant="h4" textTransform="none">
				Create a Supplier Account
			</Typography>

			<FormBox />
		</PageContainer>
	);
};
