import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import Digimon from '../../api/model/mongo/Digimon';
import ApiData from '../../api/model/mongo/types/ApiData.types';
import DigimonRequest from '../../api/model/requests/DigimonRequest';
import DigimonService from '../../api/service/DigimonService';
import { useSave, useUpdate } from '../../api/service/hooks/useGenericService';
import Message from '../../api/util/Message';
import VALUES from '../../constants/Dw1Constants';

interface DigimonViewProps {
  selectedData?: Digimon;
  creating: boolean;
  deleting: boolean;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<ApiData[], unknown>>;
  showMessage: (msg: Message | Message[]) => void;
}

const DigimonView: React.FC<DigimonViewProps> = ({
  selectedData,
  creating,
  refetch,
  showMessage,
}): JSX.Element => {
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const [digimon, setDigimon] = useState(selectedData);
  const postDigimon = useSave(VALUES.API_OBJECT.DIGIMON.NAME, DigimonService);
  const putDigimon = useUpdate(VALUES.API_OBJECT.DIGIMON.NAME, DigimonService);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Digimon>();

  const goBackToList = async (message: Message) => {
    setDisplayDialog(false);
    await refetch();
    showMessage(message);
  };

  const processGoodServiceResponse = async (message: string) => {
    await goBackToList({
      life: VALUES.MSG.MSG_LIFE,
      detail: message,
      severity: 'success',
    });
  };

  const processBadServiceResponse = async (e: { message: string }) => {
    await goBackToList({
      life: VALUES.MSG.MSG_LIFE,
      detail: e.message,
      severity: 'error',
    });
  };

  const performCreate = async (data: Digimon) => {
    const request = new DigimonRequest(data);
    await postDigimon
      .mutateAsync({ data: request })
      .then((msg) => processGoodServiceResponse(msg))
      .catch((e) => processBadServiceResponse(e));
  };

  const performUpdate = async (data: Digimon, id: string) => {
    const request = new DigimonRequest(data);
    await putDigimon
      .mutateAsync({ id: id, data: request })
      .then((msg) => processGoodServiceResponse(msg))
      .catch((e) => processBadServiceResponse(e));
  };

  const storeDigimon = async (data: Digimon) => {
    if (creating) {
      await performCreate(data);
    } else {
      await performUpdate(data, selectedData?._id ?? '');
    }
  };

  const onSubmit = async (data: Digimon) => {
    const digiAux = new Digimon(data);
    setDigimon(digiAux);
    await storeDigimon(digiAux);
  };

  const onCancel = () => {
    setDisplayDialog(false);
  };

  const dialogOptions = (
    <div className="field is-grouped">
      <div className="control">
        <Button label="Guardar" />
      </div>
      <div className="control">
        <Button
          label="Cancelar"
          className="p-button-warning"
          onClick={onCancel}
          type="button"
        />
      </div>
    </div>
  );

  return (
    <Dialog
      visible={displayDialog}
      style={{ width: '80vw' }}
      header="Detalles de Cuenta"
      modal={true}
      onHide={() => setDisplayDialog(false)}
    >
      <div className="p-grid p-fluid">
        <h5 className="p-text-center">{VALUES.API_OBJECT.DIGIMON.NAME} Info</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-field">
            <span className="p-float-label">
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required.' }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    autoFocus
                    defaultValue={digimon?.name ?? ''}
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="name"
                className={classNames({ 'p-error': errors.name })}
              >
                Name*
              </label>
            </span>
            {errors.name && (
              <small className="p-error">{errors.name.message}</small>
            )}
            {dialogOptions}
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default DigimonView;
