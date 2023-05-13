import Level from '@/api/model/mongo/Level';
import CrudData from '@/api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const levelFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Level>,
  selectedData: CrudData
) => {
  const data = selectedData?.data as Level;

  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('levelListing.l_name')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('name', {
              required: true,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="name"
            placeholder={`${t('levelListing.l_name')}*`}
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
