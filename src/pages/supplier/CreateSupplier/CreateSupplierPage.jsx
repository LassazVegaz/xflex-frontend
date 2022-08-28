import { PageContainer } from "../../../components/PageContainer/PageContainer";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import { SupplierForm } from "../../../components/SupplierForm/SupplierForm";

export const CreateSupplierPage = () => {
	return (
		<PageContainer>
			<PageHeading text="Create a Supplier" />

			<SupplierForm />
		</PageContainer>
	);
};
