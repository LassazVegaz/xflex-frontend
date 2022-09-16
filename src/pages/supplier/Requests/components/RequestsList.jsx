import { Box } from "@mui/material";

const RequestsList = ({ requests }) => {
	return (
		<Box>
			{requests.map((req) => (
				<Box key={req._id}>{req._id}</Box>
			))}
		</Box>
	);
};

export default RequestsList;
