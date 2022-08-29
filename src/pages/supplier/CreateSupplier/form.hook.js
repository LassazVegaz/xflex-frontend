import { useFormik } from "formik";
import { formHelpers } from "../../../utils/form.helpers";

export const useForm = () => {
	const form = useFormik({
		initialValues: formHelpers.suppliers.initialValues,
		validationSchema: formHelpers.suppliers.validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return form;
};
