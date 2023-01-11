import ApiConfig from 'api/model/config/ApiConfig';
import CrudData from 'api/model/requests/CrudData';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { mapColumns } from './mapColumns';
import { mapForm } from './mapForm';

interface ListingProps {
  apiObject: ApiConfig;
}

const BaseListing: React.FC<ListingProps> = ({ apiObject }) => {
  const { t, message } = useListingContext();
  const service = new GenericService(apiObject.route);

  const { data, refetch } = useGetAll(
    apiObject.queryKey,
    service,
    apiObject.expanded,
    {
      onError: (error: { message: string }) => {
        showMessage(message, 'warn', 'warn', error?.message);
      },
    }
  );

  const [selectedData, setSelectedData] = useState<CrudData>({
    creating: false,
    updating: false,
    deleting: false,
  });

  const form = useForm<object>();

  const editComponent: JSX.Element | undefined = useMemo(() => {
    const formData = mapForm(apiObject, t, form, selectedData);
    return (
      formData && (
        <Dw1BaseForm
          selectedData={selectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={apiObject.name}
          service={service}
          handleSubmit={form.handleSubmit}
          formElements={formData}
        />
      )
    );
  }, [apiObject, selectedData]);

  return (
    <Dw1Listing
      apiData={data}
      columns={mapColumns(apiObject, t)}
      imageColumn={apiObject.imageCol ? apiObject.imagePath : undefined}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={editComponent}
    />
  );
};

export default BaseListing;
