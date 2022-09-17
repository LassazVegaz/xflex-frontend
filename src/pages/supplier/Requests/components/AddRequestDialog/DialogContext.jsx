import React from "react";
import useForm from "./form";

const DialogContext = React.createContext();

const DialogContextProvider = ({ children }) => {
	const form = useForm();

	const addItem = () => {};
	const removeItem = (id) => {};

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
