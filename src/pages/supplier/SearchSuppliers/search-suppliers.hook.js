/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useScreenLoader } from "../../../hooks/loader.hook";
import { NotificationManager } from "react-notifications";
import { supplierApi } from "../../../utils/supplier.api";

export const useSearchSuppliers = () => {
	const [suppliers, setSuppliers] = useState([]);
	const [searchText, setSearchText] = useState("");
	const loader = useScreenLoader();

	const searchSuppliers = useCallback(async () => {
		loader.show();
		try {
			const response = await supplierApi.searchSuppliers(searchText);
			setSuppliers(response);
		} catch (err) {
			NotificationManager.error("Searching suppliers failed");
			console.error(err);
		}
		loader.hide();
	}, []);

	useEffect(() => {
		searchSuppliers();
	}, [searchText]);

	return {
		suppliers,
		searchText,
		setSearchText,
	};
};
