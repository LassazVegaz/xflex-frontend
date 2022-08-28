import { Box, experimental_sx as sx, styled, TextField } from "@mui/material";
import { FormButton } from "./FormButton";
import { ProfilePic } from "./ProfilePic";

export const MyBox = styled(Box)(() =>
	sx({
		mt: 15,
		mb: 9,
		pt: 14,
		pb: 6,
		px: 6,
		borderColor: "primary.main",
		border: 1,
		boxShadow: 5,
		borderRadius: 10,
		display: "flex",
		flexDirection: "column",
		rowGap: 5,
		position: "relative",
		width: "750px",
	})
);

const SmallTextField = styled(TextField)(() =>
	sx({
		width: "32%",
	})
);

export const SupplierForm = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<MyBox>
				<ProfilePic />

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<SmallTextField label="First Name" />
					<SmallTextField label="Last Name" />
				</Box>

				<TextField label="Email" type="email" />
				<TextField label="Phone Number" type="tel" />
				<TextField label="Company Name" type="text" />

				<Box
					sx={{
						mt: 5,
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<FormButton variant="outlined">Reset</FormButton>
					<FormButton variant="contained">Create</FormButton>
				</Box>
			</MyBox>
		</Box>
	);
};
