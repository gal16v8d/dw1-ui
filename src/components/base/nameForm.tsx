import type PkData from '@/api/model/mongo/PkData';
import type { CrudData } from '@/api/model/requests/CrudData';
import type { TFunction } from 'i18next';
import type { UseFormReturn } from 'react-hook-form';

type WithName = PkData & { name: string };

export const nameFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<WithName>,
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
