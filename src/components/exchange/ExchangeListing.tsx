import { Messages } from 'primereact/messages';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Exchange from '../../api/model/mongo/Exchange';
import ExchangeService from '../../api/service/ExchangeService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1BaseForm from '../ui/Dw1BaseForm';
import Dw1Listing from '../ui/Dw1Listing';

const ExchangeListing = (): JSX.Element => {
  const message = useRef<Messages>(null);
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.EXCHANGE.QUERY_KEY,
    ExchangeService,
    0,
    {
      onError: (error: { message: string }) => {
        showMessage('warn', 'warn', error.message);
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

  const columns = [
    { columnKey: 'who', field: 'who', header: 'Trader', sortable: true },
    { columnKey: 'base', field: 'base', header: 'You Have', sortable: true },
    {
      columnKey: 'result',
      field: 'result',
      header: 'Will Trade',
      sortable: true,
    },
  ];

  const showMessage = (summary: string, type: string, detail: string): void => {
    message.current?.show({
      life: VALUES.MSG.MSG_LIFE,
      severity: type,
      summary: `${summary}: `,
      detail: detail,
    });
  };

  const formElements = () => {
    return (
      <>
        <div className="field">
          <label htmlFor="who">Who*</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="who"
              placeholder="Who*"
              defaultValue={selectedData?.data?.who}
              ref={useExchangeForm.register({ required: true })}
            />
            {useExchangeForm.errors.who && (
              <small className="p-error">{'Field is required'}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="base">Base*</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="base"
              placeholder="Base*"
              defaultValue={selectedData?.data?.base}
              ref={useExchangeForm.register({ required: true })}
            />
            {useExchangeForm.errors.base && (
              <small className="p-error">{'Field is required'}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="result">Result*</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="result"
              placeholder="Result*"
              defaultValue={selectedData?.data?.result}
              ref={useExchangeForm.register({
                required: true,
              })}
            />
            {useExchangeForm.errors.result && (
              <small className="p-error">
                {'Field is required (should be a number)'}
              </small>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <Dw1Listing
      apiData={data}
      columns={columns}
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
          service={ExchangeService}
          useForm={useExchangeForm}
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default ExchangeListing;
