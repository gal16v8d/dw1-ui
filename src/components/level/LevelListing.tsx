import Level from 'api/model/mongo/Level';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { levelColumns } from './LevelColumns';
import { levelFormFields } from './LevelFormFields';

const LevelListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const levelService = new GenericService(VALUES.API_OBJECT.LEVEL.ROUTE);
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.LEVEL.QUERY_KEY,
    levelService,
    false,
    {
      onError: (error: { message: string }) => {
        showMessage(message, 'warn', 'warn', error.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Level;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });

  const useLevelForm = useForm<Level>();

  return (
    <Dw1Listing
      apiData={data}
      columns={levelColumns(t)}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={
        <Dw1BaseForm
          selectedData={selectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={VALUES.API_OBJECT.LEVEL.NAME}
          service={levelService}
          useForm={useLevelForm}
          formElements={levelFormFields(t, useLevelForm, selectedData)}
        />
      }
    />
  );
};

export default LevelListing;
