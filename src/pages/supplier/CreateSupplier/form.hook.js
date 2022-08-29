import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	company: "",
};

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string().email("Email is invalid").required("Email is required"),
	phone: Yup.string().required("Phone is required"),
	company: Yup.string().required("Company is required"),
});

export const useForm = () => {
	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return form;
};
