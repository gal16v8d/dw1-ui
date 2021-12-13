import { Messages } from 'primereact/messages';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Location from '../../api/model/mongo/Location';
import { useGetAll } from '../../api/service/hooks/useGenericService';
import LocationService from '../../api/service/LocationService';
import VALUES from '../../constants/Dw1Constants';
import Dw1BaseForm from '../ui/Dw1BaseForm';
import Dw1Listing from '../ui/Dw1Listing';

const LocationListing = (): JSX.Element => {
  const message = useRef<Messages>(null);
  const { data, refetch } = useGetAll(
    VALUES.API_OBJECT.LOCATION.QUERY_KEY,
    LocationService,
    0,
    {
      onError: (error: { message: string }) => {
        showMessage('warn', 'warn', error.message);
      },
    }
  );
  const [selectedData, setSelectedData] = useState<{
    data?: Location;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }>({ creating: false, updating: false, deleting: false });
  const useLocationForm = useForm<Location>();

  const columns = [
    { columnKey: 'name', field: 'name', header: 'Name', sortable: true },
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
              defaultValue={selectedData?.data?.name ?? ''}
              ref={useLocationForm.register({ required: true })}
            />
            {useLocationForm.errors.name && (
              <small className="p-error">{'Field is required'}</small>
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
          apiObject={VALUES.API_OBJECT.LOCATION.NAME}
          service={LocationService}
          useForm={useLocationForm}
          formElements={formElements()}
        />
      }
      messageComponent={<Messages ref={message} />}
    />
  );
};

export default LocationListing;
