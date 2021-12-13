import { Messages } from 'primereact/messages';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../api/model/mongo/Card';
import CardService from '../../api/service/CardService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1BaseForm from '../ui/Dw1BaseForm';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1YesOrNo from '../ui/Dw1YesOrNo';

const CardListing = (): JSX.Element => {
  const message = useRef<Messages>(null);
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.CARD.QUERY_KEY,
    CardService,
    0,
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
  const useElementForm = useForm<Card>();

  useEffect(
    () => setExchangeable(!!selectedData?.data?.exchangeable),
    [selectedData?.data]
  );

  const mapExchangeable = (rowData: Card) => {
    return <Dw1YesOrNo value={rowData?.exchangeable} />;
  };

  const columns = [
    { columnKey: 'number', field: 'number', header: 'Number', sortable: true },
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
    { columnKey: 'point', field: 'point', header: 'Point', sortable: true },
    {
      columnKey: 'price',
      field: 'price',
      header: 'Price (Bits)',
      sortable: true,
    },
    {
      columnKey: 'exchangeable',
      body: mapExchangeable,
      header: 'Exchangeable',
      sortable: false,
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
          <label htmlFor="name">Name*</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name*"
              defaultValue={selectedData?.data?.name}
              ref={useElementForm.register({ required: true })}
            />
            {useElementForm.errors.name && (
              <small className="p-error">{'Field is required'}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="number">Number*</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="number"
              placeholder="Number*"
              defaultValue={selectedData?.data?.number}
              ref={useElementForm.register({ required: true })}
            />
            {useElementForm.errors.number && (
              <small className="p-error">{'Field is required'}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="point">Point</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="point"
              placeholder="Point"
              defaultValue={selectedData?.data?.point}
              ref={useElementForm.register({
                required: false,
                pattern: /^[\s\d]*$/,
              })}
            />
            {useElementForm.errors.point && (
              <small className="p-error">
                {'Field is required (should be a number)'}
              </small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="price">Price</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={selectedData?.data?.price}
              ref={useElementForm.register({
                required: false,
                pattern: /^[\s\d]*$/,
              })}
            />
            {useElementForm.errors.price && (
              <small className="p-error">
                {'Field is required (should be a number)'}
              </small>
            )}
          </div>
          <div className="field">
            <label htmlFor="exchangeable">Exchangeable</label>
            <input
              type="checkbox"
              name="exchangeable"
              defaultChecked={exchangeable}
              onChange={(e) => setExchangeable(e.target.checked)}
              ref={useElementForm.register({ required: false })}
            />
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
          apiObject={VALUES.API_OBJECT.CARD.NAME}
          service={CardService}
          useForm={useElementForm}
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default CardListing;
