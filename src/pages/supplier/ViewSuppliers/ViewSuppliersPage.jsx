import { Box } from "@mui/material";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchBox } from "./components/SearchBox";
import { SupplierRow } from "./components/SupplierRow";

const SearchResults = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 4,
			}}
		>
			<SupplierRow />
			<SupplierRow />
			<SupplierRow />
		</Box>
	);
};

export const ViewSuppliersPage = () => {
	return (
		<PageContainer>
			<SearchBox />

			<Box pt={8}></Box>

			<SearchResults />

			<Box pt={5}></Box>

			<Pagination />

			<Box pt={3}></Box>
		</PageContainer>
	);
};
