import Location from 'api/model/mongo/Location';
import CrudData from 'api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const locationFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Location>,
  selectedData: CrudData
) => {
  const data = selectedData?.data as Location;

  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('locationListing.l_name')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('name', {
              required: true,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="name"
            placeholder={`${t('locationListing.l_name')}*`}
            defaultValue={data?.name ?? ''}
          />
          {useForm.formState.errors.name && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
    </>
  );
};
