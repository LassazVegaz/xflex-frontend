import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import { SupplierForm } from "../../../components/SupplierForm/SupplierForm";

export const ViewSupplierPage = () => {
	return (
		<PageContainer>
			<PageHeading text="This is one of your Suppliers" />

			<SupplierForm />
		</PageContainer>
	);
};
