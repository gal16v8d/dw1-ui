import ApiData from 'api/model/mongo/types/ApiData.types';
import ApiDataRequest from 'api/model/requests/types/ApiDataRequest.types';
import GenericService from 'api/service/GenericService';
import {
  useDelete,
  useSave,
  useUpdate,
} from 'api/service/hooks/useGenericService';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React, { useEffect, useState } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
  useForm: UseFormMethods<any>;
  formElements: JSX.Element;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ApiData[], unknown>>;
  showMessage: (summary: string, type: string, message: string) => void;
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
  const { t } = useTranslation();
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const currentId = selectedData?.data?._id ?? '';
  const postApi = useSave(apiObject, service);
  const putApi = useUpdate(apiObject, service);
  const deleteApi = useDelete(apiObject, service);

  const goBackToList = async (detail: string, severity: 'success' | 'warn') => {
    setDisplayDialog(false);
    await refetch();
    showMessage(severity, severity, detail);
  };

  const performDelete = async () => {
    await deleteApi
      .mutateAsync({
        id: currentId,
      })
      .then(() => goBackToList('Delete was successful', 'success'))
      .catch((e) => goBackToList(e?.message ?? '', 'warn'));
  };

  useEffect(() => {
    if (selectedData.deleting) {
      void performDelete();
    } else if (selectedData.creating || selectedData.updating) {
      setDisplayDialog(true);
    }
  }, [selectedData]);

  const performCreate = async (rowData: ApiDataRequest) => {
    await postApi
      .mutateAsync({
        data: rowData,
      })
      .then((msg) => goBackToList(msg.message, 'success'))
      .catch((e) => goBackToList(e?.message ?? '', 'warn'));
  };

  const performUpdate = async (rowData: ApiDataRequest) => {
    await putApi
      .mutateAsync({
        id: currentId,
        data: rowData,
      })
      .then((msg) => goBackToList(msg.message, 'success'))
      .catch((e) => goBackToList(e?.message ?? '', 'warn'));
  };

  const store = async (data: ApiDataRequest) => {
    if (selectedData?.creating) {
      await performCreate(data);
    } else {
      await performUpdate(data);
    }
  };

  const onSubmit = async (data: ApiDataRequest) => {
    await store(data);
  };

  const onCancel = () => {
    setDisplayDialog(false);
  };

  const dialogOptions = (
    <div className="field is-grouped">
      <div className="control">
        <Button label={t('baseComponent.form.save')} />
      </div>
      <div className="control">
        <Button
          label={t('baseComponent.form.cancel')}
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
