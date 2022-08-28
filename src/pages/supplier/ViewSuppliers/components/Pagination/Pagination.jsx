import "./Pagination.scss";
import { Box } from "@mui/material";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
	return (
		<Box className="pagination">
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={() => {}}
				pageRangeDisplayed={5}
				pageCount={10}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</Box>
	);
};
