import React, { useEffect } from "react";
import useForm from "./form";

let lastId = 0;

const DialogContext = React.createContext();

const DialogContextProvider = ({ children }) => {
	const form = useForm();

	useEffect(() => {
		lastId = 0;
	}, []);

	const addItem = () => {
		const item = {
			__id: ++lastId,
			code: "",
			amount: "",
		};
		form.setFieldValue("items", [...form.values.items, item]);
	};

	const removeItem = (id) => {
		const items = form.values.items.filter((item) => item.__id !== id);
		form.setFieldValue("items", items);
	};

	return (
		<DialogContext.Provider
			value={{
				form,
				addItem,
				removeItem,
			}}
		>
			{children}
		</DialogContext.Provider>
	);
};

export { DialogContext, DialogContextProvider };
