import Element from 'api/model/mongo/Element';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { elementColumns } from './ElementColumns';
import { elementFormFields } from './ElementFormFields';

const ElementListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const elementService = new GenericService(VALUES.API_OBJECT.ELEMENT.ROUTE);

  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.ELEMENT.QUERY_KEY,
    elementService,
    false,
    {
      onError: (error: { message: string }) => {
        showMessage(message, 'warn', 'warn', error.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Element;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });

  const useElementForm = useForm<Element>();

  return (
    <Dw1Listing
      apiData={data}
      columns={elementColumns(t)}
      imageColumn={VALUES.API_OBJECT.ELEMENT.IMAGE}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={
        <Dw1BaseForm
          selectedData={selectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={VALUES.API_OBJECT.ELEMENT.NAME}
          service={elementService}
          useForm={useElementForm}
          formElements={elementFormFields(t, useElementForm, selectedData)}
        />
      }
    />
  );
};

export default ElementListing;
