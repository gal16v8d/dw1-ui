import Exchange from 'api/model/mongo/Exchange';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { exchangeColumns } from './ExchangeColumns';
import { exchangeFormFields } from './ExchangeFormFields';

const ExchangeListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const exchangeService = new GenericService(VALUES.API_OBJECT.EXCHANGE.ROUTE);

  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.EXCHANGE.QUERY_KEY,
    exchangeService,
    false,
    {
      onError: (error: { message: string }) => {
        showMessage(message, 'warn', 'warn', error.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Exchange;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });

  const useExchangeForm = useForm<Exchange>();

  return (
    <Dw1Listing
      apiData={data}
      columns={exchangeColumns(t)}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={
        <Dw1BaseForm
          selectedData={selectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={VALUES.API_OBJECT.EXCHANGE.NAME}
          service={exchangeService}
          useForm={useExchangeForm}
          formElements={exchangeFormFields(t, useExchangeForm, selectedData)}
        />
      }
    />
  );
};

export default ExchangeListing;
