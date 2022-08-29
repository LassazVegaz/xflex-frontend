import myAxios from "./api";

const createSupplier = async (supplier) => {
	const res = await myAxios.post("/suppliers", supplier);
	return res.data;
};

const getSuppliers = async () => {
	const res = await myAxios.get("/suppliers");
	return res.data;
};

const getSupplier = async (id) => {
	const res = await myAxios.get(`/suppliers/${id}`);
	return res.data;
};

const updateSupplier = async (id, supplier) => {
	const res = await myAxios.put(`/suppliers/${id}`, supplier);
	return res.data;
};

const deleteSupplier = async (id) => {
	const res = await myAxios.delete(`/suppliers/${id}`);
	return res.data;
};

// check if email is already in use
const checkEmail = async (email) => {
	const res = await myAxios.get("/suppliers/check_email", {
		params: { email },
	});
	return res.data;
};

// check if phone is already in use
const checkPhone = async (phone) => {
	const res = await myAxios.get("/suppliers/check_phone", {
		params: { phone },
	});
	return res.data;
};

export const supplierApi = {
	createSupplier,
	getSuppliers,
	getSupplier,
	updateSupplier,
	deleteSupplier,
	checkEmail,
	checkPhone,
};
