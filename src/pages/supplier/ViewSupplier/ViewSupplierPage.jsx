import { useParams } from "react-router-dom";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import { SupplierForm } from "../../../components/SupplierForm/SupplierForm";
import { useViewSupplier } from "./view-supplier.hook";

export const ViewSupplierPage = () => {
	const { id } = useParams();
	const { form, reset, deleteSupplier } = useViewSupplier(id);

	return (
		<PageContainer>
			<PageHeading text="This is one of your Suppliers" />

			<SupplierForm
				form={form}
				onReset={reset}
				showDelete
				onDelete={deleteSupplier}
			/>
		</PageContainer>
	);
};
