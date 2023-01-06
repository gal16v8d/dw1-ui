import Level from 'api/model/mongo/Level';
import { useGetAll } from 'api/service/hooks/useGenericService';
import LevelService from 'api/service/LevelService';
import Dw1BaseForm from 'components/ui/Dw1BaseForm';
import Dw1Listing from 'components/ui/Dw1Listing';
import VALUES from 'constants/Dw1Constants';
import { Messages, MessagesSeverityType } from 'primereact/messages';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LevelListing = (): JSX.Element => {
  const { t, message } = useListingContext();
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.LEVEL.QUERY_KEY,
    LevelService,
    false,
    {
      onError: (error: { message: string }) => {
        showMessage('warn', 'warn', error.message);
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

  const columns = [
    {
      columnKey: 'name',
      field: 'name',
      header: t('levelListing.l_name'),
      sortable: true,
    },
  ];

  const showMessage = (
    summary: string,
    type: MessagesSeverityType,
    detail: string
  ): void => {
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
          apiObject={VALUES.API_OBJECT.LEVEL.NAME}
          service={LevelService}
          useForm={useLevelForm}
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default LevelListing;
