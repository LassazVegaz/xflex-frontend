import { Box, Typography } from "@mui/material";
import { MyButton } from "../../../../components/MyButton/MyButton";

const RequestItem = ({ item }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			<Typography flexGrow={2}>{item.code}</Typography>
			<Typography flexGrow={1}>{item.amount}</Typography>
		</Box>
	);
};

const LeftBox = ({ request }) => {
	return (
		<Box>
			<Typography>{request.date}</Typography>

			<Box pt={3} />

			<Box>
				{request.items.map((item) => (
					<RequestItem item={item} key={item._id} />
				))}
			</Box>
		</Box>
	);
};

const RightBox = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				rowGap: 2,
			}}
		>
			<MyButton variant="outlined" color="info" size="small">
				Received
			</MyButton>
			<MyButton variant="outlined" color="secondary" size="small">
				Cancelled
			</MyButton>
		</Box>
	);
};

const Request = ({ request }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				border: "1px solid black",
				borderRadius: 2,
				px: 5,
				py: 2,
				boxShadow: 5,
			}}
		>
			<LeftBox request={request} />

			<RightBox />
		</Box>
	);
};

const RequestsList = ({ requests }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				rowGap: 4,
			}}
		>
			{requests.map((req) => (
				<Request request={req} key={req._id} />
			))}
		</Box>
	);
};

export default RequestsList;
