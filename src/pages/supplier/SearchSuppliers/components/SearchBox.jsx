import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, OutlinedInput } from "@mui/material";

export const SearchBox = () => {
	return (
		<Box className="search-box">
			<OutlinedInput
				fullWidth
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				}
				endAdornment={
					<InputAdornment position="end">
						<IconButton>
							<CloseIcon />
						</IconButton>
					</InputAdornment>
				}
				sx={{
					borderRadius: 50,
					"& legend": { display: "none" },
					"& fieldset": { top: 0 },
				}}
			/>
		</Box>
	);
};
