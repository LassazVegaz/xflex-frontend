import { Avatar, experimental_sx, styled } from "@mui/material";

const IMG_SIDE = 120;

export const ProfilePic = styled(Avatar)(() =>
	experimental_sx({
		width: IMG_SIDE,
		height: IMG_SIDE,
		position: "absolute",
		top: -60,
		left: "50%",
		transform: "translateX(-50%)",
	})
);
