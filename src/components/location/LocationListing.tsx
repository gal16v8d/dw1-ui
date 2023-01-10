import Location from 'api/model/mongo/Location';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { locationColumns } from './LocationColumns';
import { locationFormFields } from './LocationFormFields';

const LocationListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const locationService = new GenericService(VALUES.API_OBJECT.LOCATION.ROUTE);
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.LOCATION.QUERY_KEY,
    locationService,
    false,
    {
      onError: (error: { message: string }) => {
        showMessage(message, 'warn', 'warn', error.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Location;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });

  const useLocationForm = useForm<Location>();

  return (
    <Dw1Listing
      apiData={data}
      columns={locationColumns(t)}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={
        <Dw1BaseForm
          selectedData={selectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={VALUES.API_OBJECT.LOCATION.NAME}
          service={locationService}
          useForm={useLocationForm}
          formElements={locationFormFields(t, useLocationForm, selectedData)}
        />
      }
    />
  );
};

export default LocationListing;
