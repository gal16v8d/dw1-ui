import { Messages } from 'primereact/messages';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Element from '../../api/model/mongo/Element';
import ElementService from '../../api/service/ElementService';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import VALUES from '../../constants/Dw1Constants';
import { useListingContext } from '../../provider/listing/Dw1ListingProvider';
import Dw1BaseForm from '../ui/Dw1BaseForm';
import Dw1Listing from '../ui/Dw1Listing';

const ElementListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.ELEMENT.QUERY_KEY,
    ElementService,
    0,
    {
      onError: (error: { message: string }) => {
        showMessage('warn', 'warn', error.message);
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
  const columns = [
    {
      columnKey: 'name',
      field: 'name',
      header: t('elementListing.l_name'),
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
          <label htmlFor="name">{`${t('elementListing.l_name')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={`${t('elementListing.l_name')}*`}
              defaultValue={selectedData?.data?.name ?? ''}
              ref={useElementForm.register({ required: true })}
            />
            {useElementForm.errors.name && (
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
      columns={columns}
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
          service={ElementService}
          useForm={useElementForm}
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default ElementListing;
