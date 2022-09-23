import { MyButton } from "../../../../components/MyButton/MyButton";

const ReportButton = () => {
	return (
		<MyButton
			variant="outlined"
			sx={{
				position: "absolute",
				top: 0,
				right: 0,
				py: 3,
				boxShadow: 2,
			}}
		>
			Generate Report
		</MyButton>
	);
};

export default ReportButton;
