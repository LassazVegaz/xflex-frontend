import { Typography, Box } from "@mui/material";
import imgSrc from "../../../../assets/comp logo 1.jpg";

const CompanyImage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				component="img"
				src={imgSrc}
				sx={{
					width: 130,
					boxShadow: 3,
					borderRadius: 5,
					p: 1,
				}}
			/>
		</Box>
	);
};

const DetailsPart = () => {
	return (
		<Box>
			<Typography variant="h5" fontWeight={700} mb={1}>
				Adidas
			</Typography>
			<Typography>FirstName LastName</Typography>
			<Typography>test@test.com</Typography>
			<Typography>078896633</Typography>
		</Box>
	);
};

export const SupplierRow = () => {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "2fr 4fr",
				boxShadow: 5,
				borderColor: "primary.main",
				border: 1,
				py: 1.7,
			}}
		>
			<CompanyImage />

			<DetailsPart />
		</Box>
	);
};
