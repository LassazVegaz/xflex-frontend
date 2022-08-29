import * as Yup from "yup";

export const formHelpers = {
	suppliers: {
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			company: "",
		},
		validationSchema: Yup.object().shape({
			firstName: Yup.string().required("First name is required"),
			lastName: Yup.string().required("Last name is required"),
			email: Yup.string()
				.email("Email is invalid")
				.required("Email is required"),
			phone: Yup.string().required("Phone is required"),
			company: Yup.string().required("Company is required"),
		}),
	},
};
