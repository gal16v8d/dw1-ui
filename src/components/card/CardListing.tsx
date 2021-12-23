import { Messages } from 'primereact/messages';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Card from '../../api/model/mongo/Card';
import CardService from '../../api/service/CardService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import Dw1BaseForm from '../ui/Dw1BaseForm';
import Dw1Listing from '../ui/Dw1Listing';
import Dw1YesOrNo from '../ui/Dw1YesOrNo';

const CardListing = (): JSX.Element => {
  const { t } = useTranslation();
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
    {
      columnKey: 'number',
      field: 'number',
      header: t('cardListing.l_number'),
      sortable: true,
    },
    {
      columnKey: 'name',
      field: 'name',
      header: t('cardListing.l_name'),
      sortable: true,
    },
    {
      columnKey: 'point',
      field: 'point',
      header: t('cardListing.l_point'),
      sortable: true,
    },
    {
      columnKey: 'price',
      field: 'price',
      header: `${t('cardListing.l_price')} (Bits)`,
      sortable: true,
    },
    {
      columnKey: 'exchangeable',
      body: mapExchangeable,
      header: t('cardListing.l_exchangeable'),
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
          <label htmlFor="name">{`${t('cardListing.l_name')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={`${t('cardListing.l_name')}*`}
              defaultValue={selectedData?.data?.name}
              ref={useElementForm.register({ required: true })}
            />
            {useElementForm.errors.name && (
              <small className="p-error">{t('form.error.required')}</small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="number">{`${t('cardListing.l_number')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="number"
              placeholder={`${t('cardListing.l_number')}*`}
              defaultValue={selectedData?.data?.number}
              ref={useElementForm.register({
                required: true,
                pattern: /^[\s\d]*$/,
              })}
            />
            {useElementForm.errors.number && (
              <small className="p-error">
                {t('form.error.required_number')}
              </small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="point">{t('cardListing.l_point')}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="point"
              placeholder={t('cardListing.l_point')}
              defaultValue={selectedData?.data?.point}
              ref={useElementForm.register({
                required: false,
                pattern: /^[\s\d]*$/,
              })}
            />
            {useElementForm.errors.point && (
              <small className="p-error">
                {t('form.error.required_number')}
              </small>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="price">{t('cardListing.l_price')}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="price"
              placeholder={t('cardListing.l_price')}
              defaultValue={selectedData?.data?.price}
              ref={useElementForm.register({
                required: false,
                pattern: /^[\s\d]*$/,
              })}
            />
            {useElementForm.errors.price && (
              <small className="p-error">
                {t('form.error.required_number')}
              </small>
            )}
          </div>
          <div className="field">
            <label htmlFor="exchangeable">
              {t('cardListing.l_exchangeable')}
            </label>
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
