import { useState } from "react";
import { Helmet } from "react-helmet";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import SmallLoader from "../../../components/SmallLoader/SmallLoader";
import REQUESTS_STATUESES from "../../../constants/sup-reqs-statuses";
import RequestsList from "./components/RequestsList";
import RequestsTabs from "./components/RequestsTabs";
import { useRequests } from "./requests.hook";

const RequestsPage = () => {
	const { requests, isLoading } = useRequests();
	const [tabIndex, setTabIndex] = useState(REQUESTS_STATUESES.PENDING);

	return (
		<>
			<Helmet>
				<title>Supplier Requests</title>
			</Helmet>

			<RequestsTabs tab={tabIndex} onChange={setTabIndex} />

			<PageContainer>
				{isLoading ? (
					<SmallLoader minHeight="30vh" />
				) : (
					<RequestsList requests={requests[tabIndex] ?? []} />
				)}
			</PageContainer>
		</>
	);
};

export default RequestsPage;
