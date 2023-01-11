import Element from 'api/model/mongo/Element';
import CrudData from 'api/model/requests/CrudData';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const elementFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Element>,
  selectedData: CrudData
) => {
  const data = selectedData?.data as Element;

  return (
    <>
      <div className="field">
        <label htmlFor="name">{`${t('elementListing.l_name')}*`}</label>
        <div className="control">
          <input
            {...useForm.register('name', {
              required: true,
              shouldUnregister: true,
            })}
            className="input"
            type="text"
            name="name"
            placeholder={`${t('elementListing.l_name')}*`}
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
