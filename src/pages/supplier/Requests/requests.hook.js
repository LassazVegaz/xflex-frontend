import React from "react";
import { supplierRequestApi } from "../../../utils/supplier-requests.api";

export const useRequests = () => {
	const [requests, setRequests] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(null);

	const getRequests = React.useCallback(async () => {
		try {
			setIsLoading(true);
			const requests = await supplierRequestApi.getRequests();
			setRequests(requests);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		getRequests();
	}, [getRequests]);

	return { requests, isLoading, error };
};
