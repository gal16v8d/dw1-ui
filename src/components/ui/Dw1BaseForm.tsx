import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import PkData from 'api/model/mongo/PkData';
import CrudData from 'api/model/requests/CrudData';
import ApiError from 'api/model/responses/ApiError';
import GenericService from 'api/service/GenericService';
import {
  useDelete,
  useSave,
  useUpdate,
} from 'api/service/hooks/useGenericService';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Messages, MessagesSeverityType } from 'primereact/messages';
import { useListingContext } from 'provider/listing/Dw1ListingProvider';
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

interface Dw1BaseFormProps {
  selectedData: CrudData;
  setSelectedData: Dispatch<SetStateAction<CrudData>>;
  apiObject: string;
  service: GenericService;
  handleSubmit: UseFormHandleSubmit<object>;
  formElements: JSX.Element;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<unknown[], unknown>>;
  showMessage: (
    message: RefObject<Messages>,
    summary: string,
    type: MessagesSeverityType,
    detail: string
  ) => void;
}

const Dw1BaseForm: React.FC<Dw1BaseFormProps> = ({
  selectedData,
  setSelectedData,
  apiObject,
  service,
  handleSubmit,
  formElements,
  refetch,
  showMessage,
}): JSX.Element => {
  const { t, message } = useListingContext();
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const currentId = (selectedData?.data as PkData)?._id ?? '';
  const goBackToList = async (detail: string, severity: 'success' | 'warn') => {
    setDisplayDialog(false);
    await refetch();
    showMessage(message, severity, severity, detail);
  };

  const postApi = useSave(apiObject, service, {
    onSuccess: () =>
      goBackToList(`${apiObject} was stored successfully!`, 'success'),
    onError: (err: ApiError) => goBackToList(err?.message ?? '', 'warn'),
  });
  const putApi = useUpdate(apiObject, service, {
    onSuccess: () =>
      goBackToList(`${apiObject} was updated successfully!`, 'success'),
    onError: (err: ApiError) => goBackToList(err?.message ?? '', 'warn'),
  });
  const deleteApi = useDelete(apiObject, service, {
    onSuccess: () =>
      goBackToList(
        `${apiObject} with id: ${currentId} was removed!`,
        'success'
      ),
    onError: (err: ApiError) => goBackToList(err?.message ?? '', 'warn'),
  });

  const performDelete = async (): Promise<void> =>
    await deleteApi.mutateAsync({
      id: currentId,
    });

  useEffect(() => {
    if (selectedData.deleting) {
      void performDelete();
    } else if (selectedData.creating || selectedData.updating) {
      setDisplayDialog(true);
    }
  }, [selectedData]);

  const performCreate = async (rowData: unknown): Promise<void> =>
    await postApi.mutateAsync({
      data: rowData,
    });

  const performUpdate = async (rowData: unknown) => {
    await putApi.mutateAsync({
      id: currentId,
      data: rowData,
    });
  };

  const store = async (data: unknown) => {
    if (selectedData?.creating) {
      await performCreate(data);
    } else {
      await performUpdate(data);
    }
  };

  const onSubmit = async (data: unknown): Promise<void> => await store(data);

  const onCancel = (): void => {
    setSelectedData({
      data: undefined,
      creating: false,
      updating: false,
      deleting: false,
    });
    setDisplayDialog(false);
  };

  const dialogOptions = (
    <div className="field is-grouped">
      <div className="control">
        <Button
          label={t('baseComponent.form.save') ?? 'baseComponent.form.save'}
        />
      </div>
      <div className="control">
        <Button
          label={t('baseComponent.form.cancel') ?? 'baseComponent.form.cancel'}
          className="p-button-warning"
          onClick={onCancel}
          type="button"
        />
      </div>
    </div>
  );

  return (
    <>
      <br />
      <Dialog
        visible={displayDialog}
        style={{ width: '70vw' }}
        header={apiObject}
        modal={true}
        onHide={onCancel}
      >
        <div className="p-grid p-fluid">
          <form onSubmit={handleSubmit(onSubmit)}>
            {formElements}
            {dialogOptions}
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default Dw1BaseForm;
