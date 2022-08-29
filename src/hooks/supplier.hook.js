import { supplierApi } from "../utils/supplier.api";
import { useScreenLoader } from "./loader.hook";

export const useSupplier = () => {
	const { show, hide } = useScreenLoader();

	const createSupplier = async (supplier) => {
		show();
		const res = await supplierApi.createSupplier(supplier);
		hide();
		return res;
	};

	const getSuppliers = async () => {
		show();
		const res = await supplierApi.getSuppliers();
		hide();
		return res;
	};

	const getSupplier = async (id) => {
		show();
		const res = await supplierApi.getSupplier(id);
		hide();
		return res;
	};

	const updateSupplier = async (id, supplier) => {
		show();
		const res = await supplierApi.updateSupplier(id, supplier);
		hide();
		return res;
	};

	const deleteSupplier = async (id) => {
		show();
		const res = await supplierApi.deleteSupplier(id);
		hide();
		return res;
	};

	const checkEmail = async (email) => {
		show();
		const res = await supplierApi.checkEmail(email);
		hide();
		return res;
	};

	const checkPhone = async (phone) => {
		show();
		const res = await supplierApi.checkPhone(phone);
		hide();
		return res;
	};

	return {
		createSupplier,
		getSuppliers,
		getSupplier,
		updateSupplier,
		deleteSupplier,
		checkEmail,
		checkPhone,
	};
};
