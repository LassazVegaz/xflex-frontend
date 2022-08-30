import { Button, experimental_sx as sx, styled } from "@mui/material";

export const FormButton = styled(Button)(() =>
	sx({
		width: 120,
		borderRadius: 10,
	})
);
