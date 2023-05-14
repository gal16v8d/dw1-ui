import CrudData from '@/api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const nameFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<any>,
  selectedData: CrudData,
  translationNameLabel: string
) => {
  const data = selectedData?.data as unknown as { name: string };

  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t(translationNameLabel)}*`}</label>
        <div className="control">
          <input
            {...useForm.register('name', {
              required: true,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="name"
            placeholder={`${t(translationNameLabel)}*`}
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
