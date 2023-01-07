import Exchange from 'api/model/mongo/Exchange';
import GenericService from 'api/service/GenericService';
import { useGetAll } from 'api/service/hooks/useGenericService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { Messages } from 'primereact/messages';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'util/ErrorHandler';
import { exchangeColumns } from './ExchangeColumns';

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

  const formElements = () => {
    return (
      <>
        <div className="field">
          <label htmlFor="who">{`${t('exchangeListing.l_who')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="who"
              placeholder={`${t('exchangeListing.l_who')}*`}
              defaultValue={selectedData?.data?.who}
              ref={useExchangeForm.register({ required: true })}
            />
            {useExchangeForm.errors.who && (
              <small className="p-error">{t('form.error.required')}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="base">{`${t('exchangeListing.l_base')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="base"
              placeholder={`${t('exchangeListing.l_base')}*`}
              defaultValue={selectedData?.data?.base}
              ref={useExchangeForm.register({ required: true })}
            />
            {useExchangeForm.errors.base && (
              <small className="p-error">{t('form.error.required')}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="result">{`${t('exchangeListing.l_result')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="result"
              placeholder={`${t('exchangeListing.l_result')}*`}
              defaultValue={selectedData?.data?.result}
              ref={useExchangeForm.register({
                required: true,
              })}
            />
            {useExchangeForm.errors.result && (
              <small className="p-error">{t('form.error.required')}</small>
            )}
          </div>
        </div>
      </>
    );
  };

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
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default ExchangeListing;
