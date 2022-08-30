import { Box, CircularProgress } from "@mui/material";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchBox } from "./components/SearchBox";
import { SupplierRow } from "./components/SupplierRow";
import { useSearchSuppliers } from "./search-suppliers.hook";

const SEARCH_ARE_MIN_HEIGHT = "30vh";

const SearchResults = ({ suppliers }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 4,
				minHeight: SEARCH_ARE_MIN_HEIGHT,
			}}
		>
			{suppliers.map((supplier) => (
				<SupplierRow key={supplier._id} supplier={supplier} />
			))}
		</Box>
	);
};

const Loader = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: SEARCH_ARE_MIN_HEIGHT,
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export const SearchSuppliersPage = () => {
	const search = useSearchSuppliers();

	return (
		<PageContainer>
			<SearchBox
				text={search.searchText}
				onChange={(e) => search.setSearchText(e.target.value)}
			/>

			<Box pt={8}></Box>

			{search.isLoading ? (
				<Loader />
			) : (
				<SearchResults suppliers={search.suppliers} />
			)}

			<Box pt={5}></Box>

			<Pagination
				onPageChange={search.setPageNo}
				totalPages={search.totalPages}
			/>

			<Box pt={3}></Box>
		</PageContainer>
	);
};
