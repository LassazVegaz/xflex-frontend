/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useScreenLoader } from "../../../hooks/loader.hook";
import { formHelpers } from "../../../utils/form.helpers";
import { supplierApi } from "../../../utils/supplier.api";

export const useViewSupplier = (supplierId) => {
	const [originalSup, setOriginalSup] = useState(null);
	const loader = useScreenLoader();

	const form = useFormik({
		initialValues: formHelpers.suppliers.initialValues,
		validationSchema: formHelpers.suppliers.validationSchema,
		onSubmit: () => {
			updateSupplier();
		},
	});

	useEffect(() => {
		getSupplier();
	}, [supplierId]);

	useEffect(() => {
		form.setValues(originalSup);
	}, [originalSup]);

	const getSupplier = async () => {
		loader.show();
		try {
			const _sup = await supplierApi.getSupplier(supplierId);
			setOriginalSup(_sup);
		} catch (error) {
			NotificationManager.error("Getting supplier data failed");
			console.error(error);
		}
		loader.hide();
	};

	const deleteSupplier = async () => {
		loader.show();
		try {
			await supplierApi.deleteSupplier(supplierId);
		} catch (error) {
			NotificationManager.error("Getting supplier data failed");
			console.error(error);
		}
		loader.hide();
	};

	const reset = () => {
		form.setValues(originalSup);
	};

	const updateSupplier = async () => {
		loader.show();
		try {
			await _updateSupplier();
		} catch (error) {
			NotificationManager.error("Updating supplier failed");
			console.error(error);
		}
		loader.hide();
	};

	const _updateSupplier = async () => {
		if (
			form.values.email !== originalSup.email &&
			(await supplierApi.checkEmail(form.values.email))
		) {
			form.setFieldError("email", "Email already exists");
		} else if (
			form.values.phone !== originalSup.phone &&
			(await supplierApi.checkPhone(form.values.phone))
		) {
			form.setFieldError("phone", "Phone number already exists");
		} else {
			const _sup = await supplierApi.updateSupplier(
				supplierId,
				form.values
			);
			setOriginalSup(_sup);
			NotificationManager.success("Supplier was updated successfully");
		}
	};

	return {
		form,
		reset,
		deleteSupplier,
	};
};
