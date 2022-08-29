import { useFormik } from "formik";
import { formHelpers } from "../../../utils/form.helpers";
import { NotificationManager } from "react-notifications";
import { useScreenLoader } from "../../../hooks/loader.hook";
import { supplierApi } from "../../../utils/supplier.api";

export const useForm = () => {
	const loader = useScreenLoader();

	const form = useFormik({
		initialValues: formHelpers.suppliers.initialValues,
		validationSchema: formHelpers.suppliers.validationSchema,
		onSubmit: () => {
			createSupplier();
		},
	});

	const createSupplier = async () => {
		loader.show();
		try {
			await _createSupplier();
		} catch (error) {
			NotificationManager.error("Error creating supplier");
			console.error(error);
		}
		loader.hide();
	};

	const _createSupplier = async () => {
		if (await supplierApi.checkEmail(form.values.email)) {
			form.setFieldError("email", "Email already exists");
		} else if (await supplierApi.checkPhone(form.values.phone)) {
			form.setFieldError("phone", "Phone already exists");
		} else {
			await supplierApi.createSupplier(form.values);
			NotificationManager.success("Supplier created successfully");
		}
	};

	return form;
};
