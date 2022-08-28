import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
	return (
		<>
			<AppBar>
				<Toolbar
					sx={{
						width: "100%",
					}}
				>
					<Typography
						variant="h5"
						fontWeight={800}
						component="div"
						sx={{
							flexGrow: 1,
						}}
					>
						XFLEX CLOTHING STORE
					</Typography>

					<Box>
						<Button variant="secondary">Shop</Button>
						<Button variant="secondary">History</Button>
						<Button variant="secondary">Login</Button>
					</Box>
				</Toolbar>
			</AppBar>

			<Box py={1}></Box>

			<Toolbar />
		</>
	);
};

export default Header;
