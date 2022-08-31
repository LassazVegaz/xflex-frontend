import { Helmet } from "react-helmet";
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
			<Helmet>
				<title>
					Supplier: {form.values.firstName} {form.values.lastName}
				</title>
			</Helmet>

			<PageHeading text="This is one of your Suppliers" />

			<SupplierForm
				form={form}
				onReset={reset}
				showDelete
				onDelete={deleteSupplier}
				primaryButtonText="Update"
			/>
		</PageContainer>
	);
};
