import Element from 'api/model/mongo/Element';
import { TFunction } from 'i18next';
import { UseFormReturn } from 'react-hook-form';

export const elementFormFields = (
  t: TFunction<'translation', undefined>,
  useForm: UseFormReturn<Element>,
  selectedData: {
    data?: Element;
    creating: boolean;
    updating: boolean;
    deleting: boolean;
  }
) => {
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
            defaultValue={selectedData?.data?.name ?? ''}
          />
          {useForm.formState.errors.name && (
            <small className="p-error">{t('form.error.required')}</small>
          )}
        </div>
      </div>
    </>
  );
};
