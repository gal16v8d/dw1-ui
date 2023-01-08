import Card from 'api/model/mongo/Card';
import ApiError from 'api/model/responses/ApiError';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { cardColumns } from './CardColumns';
import { cardFormFields } from './CardFormFields';

const CardListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const cardService = new GenericService(VALUES.API_OBJECT.CARD.ROUTE);

  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.CARD.QUERY_KEY,
    cardService,
    false,
    {
      onError: (error: ApiError) => {
        showMessage(message, 'warn', 'warn', error?.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Card;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });
  const useCardForm = useForm<Card>();
  const [exchangeable, setExchangeable] = useState<boolean>(
    !!selectedData?.data?.exchangeable
  );
  const editComponent = useMemo(() => {
    return (
      <Dw1BaseForm
        selectedData={selectedData}
        refetch={refetch}
        showMessage={showMessage}
        apiObject={VALUES.API_OBJECT.CARD.NAME}
        service={cardService}
        useForm={useCardForm}
        formElements={cardFormFields(
          t,
          useCardForm,
          selectedData,
          exchangeable,
          setExchangeable
        )}
      />
    );
  }, [selectedData]);

  useEffect(
    () => setExchangeable(!!selectedData?.data?.exchangeable),
    [selectedData?.data]
  );

  return (
    <Dw1Listing
      apiData={data}
      columns={cardColumns(t)}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={editComponent}
    />
  );
};

export default CardListing;
