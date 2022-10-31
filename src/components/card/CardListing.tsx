import Card from 'api/model/mongo/Card';
import CardService from 'api/service/CardService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { Messages } from 'primereact/messages';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCardColumns } from './CardColumns';
import { getCardForm } from './CardForm';

const CardListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.CARD.QUERY_KEY,
    CardService,
    false,
    {
      onError: (error: { message: string }) => {
        showMessage('warn', 'warn', error.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Card;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });
  const [exchangeable, setExchangeable] = useState<boolean>(
    !!selectedData?.data?.exchangeable
  );
  const useCardForm = useForm<Card>();

  useEffect(
    () => setExchangeable(!!selectedData?.data?.exchangeable),
    [selectedData?.data]
  );

  const showMessage = (summary: string, type: string, detail: string): void => {
    message.current?.show({
      life: VALUES.MSG.MSG_LIFE,
      severity: type,
      summary: `${summary}: `,
      detail: detail,
    });
  };

  return (
    <Dw1Listing
      apiData={data}
      columns={getCardColumns(t)}
      crudData={{
        selectedData,
        setSelectedData,
      }}
      editorComponent={
        <Dw1BaseForm
          selectedData={selectedData}
          refetch={refetch}
          showMessage={showMessage}
          apiObject={VALUES.API_OBJECT.CARD.NAME}
          service={CardService}
          useForm={useCardForm}
          formElements={getCardForm(
            t,
            useCardForm,
            selectedData,
            exchangeable,
            setExchangeable
          )}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default CardListing;
