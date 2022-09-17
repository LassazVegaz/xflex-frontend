import { DeleteOutline as DeleteIcon } from "@mui/icons-material";
import { Box, IconButton, styled, TextField } from "@mui/material";

const MyTextField = styled(TextField)(() => ({
	"& legend": { display: "none" },
	"& fieldset": { top: 0 },
}));

const ItemRow = ({ form, index }) => {
	const code = {
		name: `items[${index}].code`,
		value: form.values.items[index].code,
		error: form.errors.items && form.errors.items[index].code,
		touched: form.touched.items && form.touched.items[index].code,
	};

	const amount = {
		name: `items[${index}].amount`,
		value: form.values.items[index].amount,
		error: form.errors.items && form.errors?.items[index].amount,
		touched: form.touched.items && form.touched?.items[index].amount,
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				columnGap: 3,
			}}
		>
			<MyTextField
				size="small"
				name={code.name}
				value={code.value}
				onChange={form.handleChange}
				error={code.touched && Boolean(code.error)}
				helperText={code.touched && code.error}
			/>

			<MyTextField
				size="small"
				name={amount.name}
				value={amount.value}
				onChange={form.handleChange}
				error={amount.touched && Boolean(amount.error)}
				helperText={amount.touched && amount.error}
			/>

			<IconButton>
				<DeleteIcon color="secondary" />
			</IconButton>
		</Box>
	);
};

export default ItemRow;
