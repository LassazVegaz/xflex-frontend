import { Box, styled, Typography } from "@mui/material";
import RoundPlusButon from "../../../../../components/RoundPlusIcon/RoundPlusButon";
import ItemRow from "./ItemRow";

const TableHeaderText = styled(Typography)(() => ({
	fontWeight: 500,
	flexGrow: 5,
	textAlign: "center",
}));

const HeaderRow = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				alignItems: "center",
				height: 30,
			}}
		>
			<TableHeaderText>Item Code</TableHeaderText>
			<TableHeaderText>Amount</TableHeaderText>
			<Box flexGrow={2} />
		</Box>
	);
};

const MiddleBox = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				border: "1px solid",
				p: 2,
				rowGap: 2,
				borderRadius: 5,
			}}
		>
			<HeaderRow />

			<ItemRow />
			<ItemRow />
		</Box>
	);
};

const MiddleLayer = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				columnGap: 3,
			}}
		>
			<MiddleBox />

			<RoundPlusButon sideLength={30} />
		</Box>
	);
};

export default MiddleLayer;
