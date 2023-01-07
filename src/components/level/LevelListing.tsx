import Level from 'api/model/mongo/Level';
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
import { levelColumns } from './LevelColumns';

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

  const formElements = () => {
    return (
      <>
        <div className="field">
          <label htmlFor="name">{`${t('levelListing.l_name')}*`}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={`${t('levelListing.l_name')}*`}
              defaultValue={selectedData?.data?.name ?? ''}
              ref={useLevelForm.register({ required: true })}
            />
            {useLevelForm.errors.name && (
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
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default LevelListing;
