/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { supplierApi } from "../../../utils/supplier.api";

export const useSearchSuppliers = () => {
	const [suppliers, setSuppliers] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const searchSuppliers = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await supplierApi.searchSuppliers(searchText);
			setSuppliers(response);
		} catch (err) {
			NotificationManager.error("Searching suppliers failed");
			console.error(err);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		searchSuppliers();
	}, [searchText]);

	return {
		suppliers,
		searchText,
		setSearchText,
		isLoading,
	};
};
