import { Box } from "@mui/material";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchBox } from "./components/SearchBox";
import { SupplierRow } from "./components/SupplierRow";
import { useSearchSuppliers } from "./search-suppliers.hook";

const SearchResults = ({ suppliers }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 4,
			}}
		>
			{suppliers.map((supplier) => (
				<SupplierRow key={supplier._id} supplier={supplier} />
			))}
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

			<SearchResults suppliers={search.suppliers} />

			<Box pt={5}></Box>

			<Pagination />

			<Box pt={3}></Box>
		</PageContainer>
	);
};
