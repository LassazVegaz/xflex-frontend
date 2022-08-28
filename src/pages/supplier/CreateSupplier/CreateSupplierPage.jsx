import {
	Avatar,
	Box,
	Button,
	Container,
	TextField,
	Typography,
} from "@mui/material";

export const CreateSupplierPage = () => {
	return (
		<Container
			sx={{
				my: 4,
			}}
		>
			<Typography variant="h4" textTransform="none">
				Create a Supplier Account
			</Typography>

			<Box
				sx={{
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
				}}
			>
				<Avatar
					sx={{
						width: 120,
						height: 120,
						position: "absolute",
						top: -60,
						left: "50%",
						transform: "translateX(-50%)",
					}}
				/>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<TextField
						label="First Name"
						sx={{
							width: "32%",
						}}
					/>
					<TextField
						label="Last Name"
						sx={{
							width: "32%",
						}}
					/>
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
					<Button
						variant="outlined"
						sx={{
							width: 120,
						}}
					>
						Reset
					</Button>
					<Button
						variant="contained"
						sx={{
							width: 120,
						}}
					>
						Create
					</Button>
				</Box>
			</Box>
		</Container>
	);
};
