/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { supplierApi } from "../../../utils/supplier.api";

const ITEMS_PER_PAGE = 5;

export const useSearchSuppliers = () => {
	const [suppliers, setSuppliers] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [pageNo, setPageNo] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const searchSuppliers = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await supplierApi.searchSuppliers(
				searchText,
				pageNo
			);
			setSuppliers(response);
		} catch (err) {
			NotificationManager.error("Searching suppliers failed");
			console.error(err);
		}
		setIsLoading(false);
	}, [searchText, pageNo]);

	const getSuppliersCount = useCallback(async () => {
		try {
			const response = await supplierApi.getSuppliersCount();
			setTotalPages(Math.ceil(response / ITEMS_PER_PAGE));
		} catch (err) {
			NotificationManager.error("Getting suppliers count failed");
			console.error(err);
		}
	});

	useEffect(() => {
		searchSuppliers();
	}, [searchText, pageNo]);

	useEffect(() => {
		getSuppliersCount();
	}, []);

	return {
		suppliers,
		searchText,
		setSearchText,
		isLoading,
		setPageNo,
		totalPages,
	};
};
