import ApiData from 'api/model/mongo/types/ApiData.types';
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
import React, { RefObject, useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';

interface Dw1BaseFormProps {
  selectedData: {
    data?: any;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  };
  apiObject: string;
  service: GenericService;
  useForm: UseFormReturn<any>;
  formElements: JSX.Element;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ApiData[], unknown>>;
  showMessage: (
    message: RefObject<Messages>,
    summary: string,
    type: MessagesSeverityType,
    detail: string
  ) => void;
}

const Dw1BaseForm: React.FC<Dw1BaseFormProps> = ({
  selectedData,
  apiObject,
  service,
  useForm,
  formElements,
  refetch,
  showMessage,
}): JSX.Element => {
  const { t, message } = useListingContext();
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const currentId = selectedData?.data?._id ?? '';
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

  const goBackToList = async (detail: string, severity: 'success' | 'warn') => {
    setDisplayDialog(false);
    await refetch();
    showMessage(message, severity, severity, detail);
  };

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

  const onCancel = (): void => setDisplayDialog(false);

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
        onHide={() => setDisplayDialog(false)}
      >
        <div className="p-grid p-fluid">
          <form onSubmit={useForm.handleSubmit(onSubmit)}>
            {formElements}
            {dialogOptions}
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default Dw1BaseForm;
